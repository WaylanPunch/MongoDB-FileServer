---
title: mongodb-fileserver
date: 2019-07-27 20:07:15
tags:
  - MongoDB
  - Java
  - Thymeleaf
categories:
  - Java
comments: true
---

# 1.创建mongodb数据库

```
docker exec -it mymongodb mongo
show dbs
use filedb;// 创建一个名为"filedb"的数据库
db.createUser({ user: 'root', pwd: '123456', roles: [ { role: "root", db: "admin" } ] });
db.createCollection("Collection1");  // 在"filedb"中创建一个名为"Images"的Collection
```

<!-- more -->

# 2.创建项目

![预览](https://raw.githubusercontent.com/WaylanPunch/WaylanPunch.github.io/master/images/mongodb-fileserver-001.PNG)

## 2.1.配置application.properties文件

```
server.address=localhost
server.port=8080

# THYMELEAF (ThymeleafAutoConfiguration)
spring.thymeleaf.cache=false
# Whether to enable template caching.
spring.thymeleaf.check-template=true
# Whether to check that the template exists before rendering it.
spring.thymeleaf.check-template-location=true
# Whether to check that the templates location exists.
spring.thymeleaf.enabled=true
# Whether to enable Thymeleaf view resolution for Web frameworks.
spring.thymeleaf.enable-spring-el-compiler=false
# Enable the SpringEL compiler in SpringEL expressions.
spring.thymeleaf.encoding=UTF-8
# Template files encoding.
#spring.thymeleaf.excluded-view-names= # Comma-separated list of view names (patterns allowed) that should be excluded from resolution.
spring.thymeleaf.mode=HTML5
# Template mode to be applied to templates. See also Thymeleaf's TemplateMode enum.
spring.thymeleaf.prefix=classpath:/templates/
# Prefix that gets prepended to view names when building a URL.
#spring.thymeleaf.reactive.chunked-mode-view-names=
# Comma-separated list of view names (patterns allowed) that should be the only ones executed in CHUNKED mode when a max chunk size is set.
#spring.thymeleaf.reactive.full-mode-view-names=
# Comma-separated list of view names (patterns allowed) that should be executed in FULL mode even if a max chunk size is set.
#spring.thymeleaf.reactive.max-chunk-size=0
# Maximum size of data buffers used for writing to the response, in bytes.
#spring.thymeleaf.reactive.media-types= # Media types supported by the view technology.
spring.thymeleaf.servlet.content-type=text/html
# Content-Type value written to HTTP responses.
spring.thymeleaf.suffix=.html
# Suffix that gets appended to view names when building a URL.
#spring.thymeleaf.template-resolver-order= # Order of the template resolver in the chain.
#spring.thymeleaf.view-names= # Comma-separated list of view names (patterns allowed) that can be resolved.


# limit upload file size
spring.servlet.multipart.max-file-size=1024KB
spring.servlet.multipart.max-request-size=1024KB

# independent MongoDB server
#spring.data.mongodb.uri=mongodb://localhost:27017/test
spring.data.mongodb.uri=mongodb://root:123456@192.168.1.102:27017/filedb
```

## 2.2.创建Image实体类

```
package com.waylanpunch.mongodbfileserver.bean;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

/**
 * Image 图片类.
 * 
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
@Document(collection = "images")
public class Image {
	@Id  // 主键
	private String id;
    private String name; // 图片名称
    private String contentType; // 图片类型
    private long size;
    private Date uploadDate;
    private String md5;
    private Binary content; // 图片内容
    private String path; // 图片路径
    
    public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public long getSize() {
		return size;
	}

	public void setSize(long size) {
		this.size = size;
	}

	public Date getUploadDate() {
		return uploadDate;
	}

	public void setUploadDate(Date uploadDate) {
		this.uploadDate = uploadDate;
	}

	public String getMd5() {
		return md5;
	}

	public void setMd5(String md5) {
		this.md5 = md5;
	}

	public Binary getContent() {
		return content;
	}

	public void setContent(Binary content) {
		this.content = content;
	}
    
    protected Image() {
    }
    
    public Image(String name, String contentType, long size, Binary content) {
    	this.name = name;
    	this.contentType = contentType;
    	this.size = size;
    	this.uploadDate = new Date();
    	this.content = content;
    }
   
    @Override
    public boolean equals(Object object) {
        if (this == object) {
            return true;
        }
        if (object == null || getClass() != object.getClass()) {
            return false;
        }
        Image imageInfo = (Image) object;
        return java.util.Objects.equals(size, imageInfo.size)
                && java.util.Objects.equals(name, imageInfo.name)
                && java.util.Objects.equals(contentType, imageInfo.contentType)
                && java.util.Objects.equals(uploadDate, imageInfo.uploadDate)
                && java.util.Objects.equals(md5, imageInfo.md5)
                && java.util.Objects.equals(id, imageInfo.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hash(name, contentType, size, uploadDate, md5, id);
    }

    @Override
    public String toString() {
        return "Image{"
                + "name='" + name + '\''
                + ", contentType='" + contentType + '\''
                + ", size=" + size
                + ", uploadDate=" + uploadDate
                + ", md5='" + md5 + '\''
                + ", id='" + id + '\''
                + '}';
    }
}
```

## 2.3.创建ImageRepository类

```
package com.waylanpunch.mongodbfileserver.repository;

import com.waylanpunch.mongodbfileserver.bean.Image;
import org.springframework.data.mongodb.repository.MongoRepository;


/**
 * Image 存储库.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
public interface ImageRepository extends MongoRepository<Image, String> {
}
```

## 2.4.创建ImageService接口

```
package com.waylanpunch.mongodbfileserver.service;

import com.waylanpunch.mongodbfileserver.bean.Image;

import java.util.List;
import java.util.Optional;

/**
 * Image 服务接口.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
public interface ImageService {
	/**
	 * 保存图片
	 * @param image
	 * @return
	 */
	Image saveImage(Image image);
	
	/**
	 * 删除图片
	 * @param id
	 * @return
	 */
	void removeImage(String id);
	
	/**
	 * 根据id获取图片
	 * @param id
	 * @return
	 */
	Optional<Image> getImageById(String id);

	/**
	 * 分页查询，按上传时间降序
	 * @param pageIndex
	 * @param pageSize
	 * @return
	 */
	List<Image> listImagesByPage(int pageIndex, int pageSize);
}
```

## 2.5.创建ImageServiceImpl类

```
package com.waylanpunch.mongodbfileserver.service;

import com.waylanpunch.mongodbfileserver.bean.Image;
import com.waylanpunch.mongodbfileserver.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Image 服务类.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
@Service
public class ImageServiceImpl implements ImageService {
	
	@Autowired
	public ImageRepository imageRepository;

	@Override
	public Image saveImage(Image image) {
		return imageRepository.save(image);
	}

	@Override
	public void removeImage(String id) {
		imageRepository.deleteById(id);
	}

	@Override
	public Optional<Image> getImageById(String id) {
		return imageRepository.findById(id);
	}

	@Override
	public List<Image> listImagesByPage(int pageIndex, int pageSize) {
		Page<Image> page = null;
		List<Image> list = null;
		
		Sort sort = new Sort(Direction.DESC,"uploadDate");
		Pageable pageable = PageRequest.of(pageIndex, pageSize, sort);
		
		page = imageRepository.findAll(pageable);
		list = page.getContent();
		return list;
	}
}
```

## 2.6.创建ImageController类

```
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
```

## 2.7.创建Spring Security配置类

```
package com.waylanpunch.mongodbfileserver.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Image Spring Security 配置类.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
@Configuration
@EnableWebMvc
public class SecurityConfig extends WebMvcConfigurerAdapter {

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*") ; // 允许跨域请求
	}
}
```

## 2.8.创建MD5工具类

```
package com.waylanpunch.mongodbfileserver.util;

import java.io.IOException;
import java.io.InputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * MD5 工具类.
 *
 * @since 2019年7月27日 20:29:55
 * @author <a href="https://github.com/WaylanPunch">Waylan Punch</a>
 */
public class MD5Util {

	/** 
     * 获取该输入流的MD5值 
     *  
     * @param is 
     * @return 
     * @throws NoSuchAlgorithmException 
     * @throws IOException 
     */  
    public static String getMD5(InputStream is) throws NoSuchAlgorithmException, IOException {  
        StringBuffer md5 = new StringBuffer();  
        MessageDigest md = MessageDigest.getInstance("MD5");  
        byte[] dataBytes = new byte[1024];  
          
        int nread = 0;   
        while ((nread = is.read(dataBytes)) != -1) {  
            md.update(dataBytes, 0, nread);  
        };  
        byte[] mdbytes = md.digest();  
          
        // convert the byte to hex format  
        for (int i = 0; i < mdbytes.length; i++) {  
            md5.append(Integer.toString((mdbytes[i] & 0xff) + 0x100, 16).substring(1));  
        }  
        return md5.toString();  
    }  

}
```

[MongoDB-FileServer](https://github.com/WaylanPunch/MongoDB-FileServer)

![预览](https://raw.githubusercontent.com/WaylanPunch/WaylanPunch.github.io/master/images/mongodb-fileserver-002.PNG)

