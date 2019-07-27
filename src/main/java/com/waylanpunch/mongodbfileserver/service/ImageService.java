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
