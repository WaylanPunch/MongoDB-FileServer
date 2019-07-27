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
