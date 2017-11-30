ALTER TABLE `gdes_pipeline`.`usuarios`   
  ADD COLUMN `esAdministrador` BOOL DEFAULT FALSE NULL AFTER `centroId`;