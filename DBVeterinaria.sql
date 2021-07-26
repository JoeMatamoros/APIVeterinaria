CREATE DATABASE  IF NOT EXISTS `vethuellitasdesol` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vethuellitasdesol`;
-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vethuellitasdesol
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `Id_cita` int NOT NULL AUTO_INCREMENT,
  `Fecha_cita` datetime NOT NULL,
  `Id_tipo_cita` int NOT NULL,
  `Id_cliente` int NOT NULL,
  PRIMARY KEY (`Id_cita`),
  KEY `Id_cliente_fk_idx` (`Id_cliente`),
  CONSTRAINT `Id_cliente_fk` FOREIGN KEY (`Id_cliente`) REFERENCES `clientes` (`Id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `Id_cliente` int NOT NULL AUTO_INCREMENT,
  `Nom_cliente` varchar(45) NOT NULL,
  `Tel_cliente` varchar(12) NOT NULL,
  `Correo_cliente` varchar(100) NOT NULL,
  `Contrasenia` varchar(250) NOT NULL,
  `Direc_cliente` varchar(250) NOT NULL,
  PRIMARY KEY (`Id_cliente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `Id_empleado` int NOT NULL AUTO_INCREMENT,
  `Nom_empleado` varchar(45) NOT NULL,
  `Correo_empleado` varchar(100) NOT NULL,
  `Tel_empleado` varchar(12) NOT NULL,
  `Id_puesto` int NOT NULL,
  `Genero` varchar(1) NOT NULL,
  `Id_horario` int NOT NULL,
  `Fecha_contratacion` date NOT NULL,
  `Fecha_despido` date DEFAULT NULL,
  `Activo` tinyint DEFAULT '1',
  PRIMARY KEY (`Id_empleado`),
  KEY `Id_puesto_fk_idx` (`Id_puesto`),
  KEY `Id_horario_fk_idx` (`Id_horario`),
  CONSTRAINT `Id_horario_fk` FOREIGN KEY (`Id_horario`) REFERENCES `horarios` (`Id_horario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_puesto_fk` FOREIGN KEY (`Id_puesto`) REFERENCES `puestos` (`Id_puesto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios`
--

DROP TABLE IF EXISTS `horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios` (
  `Id_horario` int NOT NULL AUTO_INCREMENT,
  `Descrip_horario` varchar(10) NOT NULL,
  PRIMARY KEY (`Id_horario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios`
--

LOCK TABLES `horarios` WRITE;
/*!40000 ALTER TABLE `horarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marcas` (
  `Id_marca` int NOT NULL AUTO_INCREMENT,
  `Nom_marca` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_marca`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas` (
  `Id_mascotas` int NOT NULL AUTO_INCREMENT,
  `Nom_mascotas` varchar(45) DEFAULT NULL,
  `Peso` varchar(45) DEFAULT NULL,
  `Altura` varchar(45) DEFAULT NULL,
  `Id_cliente` int NOT NULL,
  `Id_raza` int NOT NULL,
  PRIMARY KEY (`Id_mascotas`),
  KEY `Id_cliente_fkm_idx` (`Id_cliente`),
  KEY `Id_raza_fkm_idx` (`Id_raza`),
  CONSTRAINT `Id_cliente_fkm` FOREIGN KEY (`Id_cliente`) REFERENCES `clientes` (`Id_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_raza_fkm` FOREIGN KEY (`Id_raza`) REFERENCES `raza` (`Id_raza`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicina`
--

DROP TABLE IF EXISTS `medicina`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicina` (
  `Id_medicina` int NOT NULL AUTO_INCREMENT,
  `Descrip_medicina` varchar(45) NOT NULL,
  PRIMARY KEY (`Id_medicina`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicina`
--

LOCK TABLES `medicina` WRITE;
/*!40000 ALTER TABLE `medicina` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicina` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicina_presentaciones`
--

DROP TABLE IF EXISTS `medicina_presentaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicina_presentaciones` (
  `Id_medicina` int NOT NULL,
  `Id_presentacion` int NOT NULL,
  PRIMARY KEY (`Id_medicina`,`Id_presentacion`),
  KEY `Id_presentacion_idx` (`Id_presentacion`),
  CONSTRAINT `Id_medicina_fkp` FOREIGN KEY (`Id_medicina`) REFERENCES `medicina` (`Id_medicina`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_presentacion_fkp` FOREIGN KEY (`Id_presentacion`) REFERENCES `presentaciones` (`Id_presentacion`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicina_presentaciones`
--

LOCK TABLES `medicina_presentaciones` WRITE;
/*!40000 ALTER TABLE `medicina_presentaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicina_presentaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicinas_mascotas`
--

DROP TABLE IF EXISTS `medicinas_mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicinas_mascotas` (
  `Id_medicina` int NOT NULL,
  `Id_mascotas` int NOT NULL,
  `Cantidad` int DEFAULT '0',
  PRIMARY KEY (`Id_medicina`,`Id_mascotas`),
  KEY `Id_mascotas_fkm_idx` (`Id_mascotas`),
  CONSTRAINT `Id_mascotas_fkm` FOREIGN KEY (`Id_mascotas`) REFERENCES `mascotas` (`Id_mascotas`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_medicina_fkm` FOREIGN KEY (`Id_medicina`) REFERENCES `medicina` (`Id_medicina`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicinas_mascotas`
--

LOCK TABLES `medicinas_mascotas` WRITE;
/*!40000 ALTER TABLE `medicinas_mascotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicinas_mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes`
--

DROP TABLE IF EXISTS `ordenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes` (
  `Id_orden` int NOT NULL AUTO_INCREMENT,
  `Anotaciones` varchar(200) DEFAULT NULL,
  `Id_cliente` int NOT NULL,
  `Subtotal` double NOT NULL,
  `Impuesto` double DEFAULT '0',
  `Descuento` double DEFAULT '0',
  PRIMARY KEY (`Id_orden`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes`
--

LOCK TABLES `ordenes` WRITE;
/*!40000 ALTER TABLE `ordenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordenes_producto`
--

DROP TABLE IF EXISTS `ordenes_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordenes_producto` (
  `Id_orden` int NOT NULL,
  `Id_producto` int NOT NULL,
  `Cantidad` varchar(45) NOT NULL,
  PRIMARY KEY (`Id_orden`,`Id_producto`),
  KEY `Id_producto_fk_idx` (`Id_producto`),
  CONSTRAINT `Id_orden_fk` FOREIGN KEY (`Id_orden`) REFERENCES `ordenes` (`Id_orden`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_producto_fk` FOREIGN KEY (`Id_producto`) REFERENCES `productos` (`Id_producto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordenes_producto`
--

LOCK TABLES `ordenes_producto` WRITE;
/*!40000 ALTER TABLE `ordenes_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordenes_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `presentaciones`
--

DROP TABLE IF EXISTS `presentaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `presentaciones` (
  `Id_presentacion` int NOT NULL AUTO_INCREMENT,
  `Descrip_presentacion` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_presentacion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `presentaciones`
--

LOCK TABLES `presentaciones` WRITE;
/*!40000 ALTER TABLE `presentaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `presentaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `Id_producto` int NOT NULL AUTO_INCREMENT,
  `Descrip_producto` varchar(70) NOT NULL,
  `Expiracion` date DEFAULT NULL,
  `Cantidad` int DEFAULT '0',
  `Id_marca` int NOT NULL,
  `Activo` tinyint DEFAULT '1',
  PRIMARY KEY (`Id_producto`),
  KEY `Id_marca_fk_idx` (`Id_marca`),
  CONSTRAINT `Id_marca_fkp` FOREIGN KEY (`Id_marca`) REFERENCES `marcas` (`Id_marca`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `puestos`
--

DROP TABLE IF EXISTS `puestos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `puestos` (
  `Id_puesto` int NOT NULL AUTO_INCREMENT,
  `Descrip_puesto` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_puesto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `puestos`
--

LOCK TABLES `puestos` WRITE;
/*!40000 ALTER TABLE `puestos` DISABLE KEYS */;
/*!40000 ALTER TABLE `puestos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raza`
--

DROP TABLE IF EXISTS `raza`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raza` (
  `Id_raza` int NOT NULL AUTO_INCREMENT,
  `Descrip_raza` varchar(50) NOT NULL,
  `Id_tipo_mascotas` int NOT NULL,
  PRIMARY KEY (`Id_raza`),
  KEY `Id_tipo_mascotas_fk_idx` (`Id_tipo_mascotas`),
  CONSTRAINT `Id_tipo_mascotas_fk` FOREIGN KEY (`Id_tipo_mascotas`) REFERENCES `tipo_mascotas` (`Id_tipo_mascotas`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raza`
--

LOCK TABLES `raza` WRITE;
/*!40000 ALTER TABLE `raza` DISABLE KEYS */;
/*!40000 ALTER TABLE `raza` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `Id_tarjeta` int NOT NULL AUTO_INCREMENT,
  `Num_tarjeta` varchar(45) NOT NULL,
  `Nombre_tarjeta` varchar(60) NOT NULL,
  `CVV` int NOT NULL,
  `Id_cliente` int NOT NULL,
  `Fecha_vencimiento` date NOT NULL,
  PRIMARY KEY (`Id_tarjeta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_cita`
--

DROP TABLE IF EXISTS `tipo_cita`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_cita` (
  `Id_tipo_cita` int NOT NULL AUTO_INCREMENT,
  `Descrip_tipo_cita` varchar(50) NOT NULL,
  `Precio_cita` double NOT NULL,
  PRIMARY KEY (`Id_tipo_cita`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_cita`
--

LOCK TABLES `tipo_cita` WRITE;
/*!40000 ALTER TABLE `tipo_cita` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_cita` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_mascotas`
--

DROP TABLE IF EXISTS `tipo_mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_mascotas` (
  `Id_tipo_mascotas` int NOT NULL AUTO_INCREMENT,
  `Descrip_tipo` varchar(60) NOT NULL,
  PRIMARY KEY (`Id_tipo_mascotas`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_mascotas`
--

LOCK TABLES `tipo_mascotas` WRITE;
/*!40000 ALTER TABLE `tipo_mascotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto`
--

DROP TABLE IF EXISTS `tipo_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_producto` (
  `Id_tipo_producto` int NOT NULL AUTO_INCREMENT,
  `Descrip_tipo_producto` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_tipo_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto`
--

LOCK TABLES `tipo_producto` WRITE;
/*!40000 ALTER TABLE `tipo_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_producto_marcas`
--

DROP TABLE IF EXISTS `tipo_producto_marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_producto_marcas` (
  `Id_tipo_producto` int NOT NULL,
  `Id_marca` int NOT NULL,
  PRIMARY KEY (`Id_tipo_producto`,`Id_marca`),
  KEY `Id_marca_fk_idx` (`Id_marca`),
  CONSTRAINT `Id_marca_fk` FOREIGN KEY (`Id_marca`) REFERENCES `marcas` (`Id_marca`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_tipo_producto_fk` FOREIGN KEY (`Id_tipo_producto`) REFERENCES `tipo_producto` (`Id_tipo_producto`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_producto_marcas`
--

LOCK TABLES `tipo_producto_marcas` WRITE;
/*!40000 ALTER TABLE `tipo_producto_marcas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_producto_marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacunas`
--

DROP TABLE IF EXISTS `vacunas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacunas` (
  `Id_vacuna` int NOT NULL AUTO_INCREMENT,
  `Descrp_vacuna` varchar(60) NOT NULL,
  PRIMARY KEY (`Id_vacuna`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacunas`
--

LOCK TABLES `vacunas` WRITE;
/*!40000 ALTER TABLE `vacunas` DISABLE KEYS */;
/*!40000 ALTER TABLE `vacunas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vacunas_mascotas`
--

DROP TABLE IF EXISTS `vacunas_mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacunas_mascotas` (
  `Id_vacuna` int NOT NULL,
  `Id_mascotas` int NOT NULL,
  `Cantidad_minima` int DEFAULT '3',
  PRIMARY KEY (`Id_vacuna`,`Id_mascotas`),
  KEY `Id_mascota_fk_idx` (`Id_mascotas`),
  CONSTRAINT `Id_mascota_fk` FOREIGN KEY (`Id_mascotas`) REFERENCES `mascotas` (`Id_mascotas`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Id_vacuna_fk` FOREIGN KEY (`Id_vacuna`) REFERENCES `vacunas` (`Id_vacuna`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacunas_mascotas`
--

LOCK TABLES `vacunas_mascotas` WRITE;
/*!40000 ALTER TABLE `vacunas_mascotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `vacunas_mascotas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-20 19:55:29
