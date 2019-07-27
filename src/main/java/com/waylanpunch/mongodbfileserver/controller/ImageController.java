package com.waylanpunch.mongodbfileserver.controller;


import com.waylanpunch.mongodbfileserver.bean.Image;
import com.waylanpunch.mongodbfileserver.service.ImageService;
import com.waylanpunch.mongodbfileserver.util.MD5Util;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

/**
 * Image 控制器.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
@CrossOrigin(origins = "*", maxAge = 3600) // 允许所有域名访问
@Controller
public class ImageController {

	@Autowired
	private ImageService imageService;

	@Value("${server.address}")
	private String serverAddress;

	@Value("${server.port}")
	private String serverPort;

	@RequestMapping(value = "/")
	public String index(Model model) {
		// 展示最新二十条数据
		model.addAttribute("images", imageService.listImagesByPage(0, 20));
		return "index";
	}

	/**
	 * 分页查询图片
	 * 
	 * @param pageIndex
	 * @param pageSize
	 * @return
	 */
	@GetMapping("images/{pageIndex}/{pageSize}")
	@ResponseBody
	public List<Image> listImagesByPage(@PathVariable int pageIndex, @PathVariable int pageSize) {
		return imageService.listImagesByPage(pageIndex, pageSize);
	}

	/**
	 * 获取图片片信息
	 * 
	 * @param id
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	@GetMapping("images/{id}")
	@ResponseBody
	public ResponseEntity<Object> serveImage(@PathVariable String id) throws UnsupportedEncodingException {

		Optional<Image> image = imageService.getImageById(id);

		if (image.isPresent()) {
			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; imageName=" + new String(image.get().getName().getBytes("utf-8"),"ISO-8859-1"))
					.header(HttpHeaders.CONTENT_TYPE, "application/octet-stream")
					.header(HttpHeaders.CONTENT_LENGTH, image.get().getSize() + "").header("Connection", "close")
					.body(image.get().getContent().getData());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Image was not fount");
		}

	}

	/**
	 * 在线显示图片
	 * 
	 * @param id
	 * @return
	 */
	@GetMapping("/view/{id}")
	@ResponseBody
	public ResponseEntity<Object> serveImageOnline(@PathVariable String id) {

		Optional<Image> image = imageService.getImageById(id);

		if (image.isPresent()) {
			return ResponseEntity.ok()
					.header(HttpHeaders.CONTENT_DISPOSITION, "imageName=\"" + image.get().getName() + "\"")
					.header(HttpHeaders.CONTENT_TYPE, image.get().getContentType())
					.header(HttpHeaders.CONTENT_LENGTH, image.get().getSize() + "").header("Connection", "close")
					.body(image.get().getContent().getData());
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Image was not fount");
		}

	}

	/**
	 * 上传
	 * 
	 * @param image
	 * @param redirectAttributes
	 * @return
	 */
	@PostMapping("/")
	public String handleImageUpload(@RequestParam("image") MultipartFile image, RedirectAttributes redirectAttributes) {

		try {
			Image f = new Image(image.getOriginalFilename(), image.getContentType(), image.getSize(),
					new Binary(image.getBytes()));
			f.setMd5(MD5Util.getMD5(image.getInputStream()));
			imageService.saveImage(f);
		} catch (IOException | NoSuchAlgorithmException ex) {
			ex.printStackTrace();
			redirectAttributes.addFlashAttribute("message", "Your " + image.getOriginalFilename() + " is wrong!");
			return "redirect:/";
		}

		redirectAttributes.addFlashAttribute("message",
				"You successfully uploaded " + image.getOriginalFilename() + "!");

		return "redirect:/";
	}

	/**
	 * 上传接口
	 * 
	 * @param image
	 * @return
	 */
	@PostMapping("/upload")
	@ResponseBody
	public ResponseEntity<String> handleImageUpload(@RequestParam("image") MultipartFile image) {
		Image returnImage = null;
		try {
			Image f = new Image(image.getOriginalFilename(), image.getContentType(), image.getSize(),
					new Binary(image.getBytes()));
			f.setMd5(MD5Util.getMD5(image.getInputStream()));
			returnImage = imageService.saveImage(f);
			String path = "//" + serverAddress + ":" + serverPort + "/view/" + returnImage.getId();
			return ResponseEntity.status(HttpStatus.OK).body(path);

		} catch (IOException | NoSuchAlgorithmException ex) {
			ex.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
		}

	}

	/**
	 * 删除图片
	 * 
	 * @param id
	 * @return
	 */
	@DeleteMapping("/{id}")
	@ResponseBody
	public ResponseEntity<String> deleteImage(@PathVariable String id) {

		try {
			imageService.removeImage(id);
			return ResponseEntity.status(HttpStatus.OK).body("DELETE Success!");
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
		}
	}
}
