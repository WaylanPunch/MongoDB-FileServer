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
