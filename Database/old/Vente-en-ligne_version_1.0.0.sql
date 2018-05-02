SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Categorie`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Categorie` (
  `idCategorie` INT NOT NULL AUTO_INCREMENT ,
  `type` VARCHAR(255) NOT NULL ,
  `date_creation` DATETIME NULL ,
  `date_update` DATETIME NULL ,
  PRIMARY KEY (`idCategorie`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Produit`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Produit` (
  `idProduit` INT NOT NULL AUTO_INCREMENT ,
  `nom` VARCHAR(255) NOT NULL ,
  `description` TEXT NULL ,
  `nbre_like` INT NULL ,
  `nbre_vendu` INT NULL ,
  `nbre_en_stock` INT NOT NULL ,
  `rabais` DOUBLE NULL ,
  `Date_creation` DATETIME NULL ,
  `Date_update` DATETIME NULL ,
  `Activer` TINYINT(1)  NOT NULL ,
  `Categorie_idCategorie` INT NOT NULL ,
  PRIMARY KEY (`idProduit`) ,
  INDEX `fk_Produit_Categorie1` (`Categorie_idCategorie` ASC) ,
  CONSTRAINT `fk_Produit_Categorie1`
    FOREIGN KEY (`Categorie_idCategorie` )
    REFERENCES `mydb`.`Categorie` (`idCategorie` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Caracteristiques`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Caracteristiques` (
  `idCaracteristiques` INT NOT NULL AUTO_INCREMENT ,
  `couleur` VARCHAR(255) NOT NULL ,
  `size` INT NULL ,
  `prix` DOUBLE NOT NULL ,
  `image` TEXT NULL ,
  `quantite` INT NULL ,
  `Caracteristiquescol` VARCHAR(45) NOT NULL ,
  `Produit_idProduit` INT NOT NULL ,
  PRIMARY KEY (`idCaracteristiques`) ,
  INDEX `fk_Caracteristiques_Produit` (`Produit_idProduit` ASC) ,
  CONSTRAINT `fk_Caracteristiques_Produit`
    FOREIGN KEY (`Produit_idProduit` )
    REFERENCES `mydb`.`Produit` (`idProduit` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Role` (
  `idRole` INT NOT NULL AUTO_INCREMENT ,
  `nom` VARCHAR(255) NOT NULL ,
  `date_creation` DATETIME NULL ,
  `date_update` DATETIME NULL ,
  `description` TEXT NULL ,
  PRIMARY KEY (`idRole`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Users`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT ,
  `nom` VARCHAR(255) NOT NULL ,
  `prenom` VARCHAR(255) NULL ,
  `email` VARCHAR(255) NOT NULL ,
  `password` VARCHAR(255) NULL ,
  `date_derniere_connection` DATETIME NOT NULL ,
  `etat_connection` TINYINT(1)  NULL ,
  `avatar` TEXT NULL ,
  `date_creation` DATETIME NULL ,
  `date_update` DATETIME NULL ,
  `Role_idRole` INT NOT NULL ,
  PRIMARY KEY (`idUsers`, `Role_idRole`) ,
  INDEX `fk_Users_Role1` (`Role_idRole` ASC) ,
  CONSTRAINT `fk_Users_Role1`
    FOREIGN KEY (`Role_idRole` )
    REFERENCES `mydb`.`Role` (`idRole` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Reference_livraison`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Reference_livraison` (
  `idReference_livraison` INT NOT NULL AUTO_INCREMENT ,
  `date_livraison` DATETIME NOT NULL ,
  `numero` VARCHAR(255) NULL ,
  `rue` VARCHAR(255) NOT NULL ,
  `ville` VARCHAR(255) NOT NULL ,
  `pays` VARCHAR(255) NOT NULL ,
  `codePostal` VARCHAR(255) NULL ,
  `telephone` VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`idReference_livraison`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Paiement`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Paiement` (
  `idPaiement` INT NOT NULL AUTO_INCREMENT ,
  `date_creation` DATETIME NULL ,
  `date_update` DATETIME NULL ,
  `Reference_livraison_idReference_livraison` INT NOT NULL ,
  PRIMARY KEY (`idPaiement`, `Reference_livraison_idReference_livraison`) ,
  INDEX `fk_Paiement_Reference_livraison1` (`Reference_livraison_idReference_livraison` ASC) ,
  CONSTRAINT `fk_Paiement_Reference_livraison1`
    FOREIGN KEY (`Reference_livraison_idReference_livraison` )
    REFERENCES `mydb`.`Reference_livraison` (`idReference_livraison` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Commande`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Commande` (
  `idCommande` INT NOT NULL AUTO_INCREMENT ,
  `date_commande` DATETIME NOT NULL ,
  `quantite` INT NOT NULL ,
  `date_update` DATETIME NULL ,
  `Users_idUsers` INT NOT NULL ,
  `Paiement_idPaiement` INT NOT NULL ,
  `Paiement_Reference_livraison_idReference_livraison` INT NOT NULL ,
  PRIMARY KEY (`idCommande`, `Users_idUsers`, `Paiement_idPaiement`, `Paiement_Reference_livraison_idReference_livraison`) ,
  INDEX `fk_Commande_Users1` (`Users_idUsers` ASC) ,
  INDEX `fk_Commande_Paiement1` (`Paiement_idPaiement` ASC, `Paiement_Reference_livraison_idReference_livraison` ASC) ,
  CONSTRAINT `fk_Commande_Users1`
    FOREIGN KEY (`Users_idUsers` )
    REFERENCES `mydb`.`Users` (`idUsers` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Commande_Paiement1`
    FOREIGN KEY (`Paiement_idPaiement` , `Paiement_Reference_livraison_idReference_livraison` )
    REFERENCES `mydb`.`Paiement` (`idPaiement` , `Reference_livraison_idReference_livraison` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Produit_Commande`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Produit_Commande` (
  `Produit_idProduit` INT NOT NULL ,
  `Commande_idCommande` INT NOT NULL ,
  PRIMARY KEY (`Produit_idProduit`, `Commande_idCommande`) ,
  INDEX `fk_Produit_Commande_Commande1` (`Commande_idCommande` ASC) ,
  CONSTRAINT `fk_Produit_Commande_Produit1`
    FOREIGN KEY (`Produit_idProduit` )
    REFERENCES `mydb`.`Produit` (`idProduit` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Produit_Commande_Commande1`
    FOREIGN KEY (`Commande_idCommande` )
    REFERENCES `mydb`.`Commande` (`idCommande` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Permission`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Permission` (
  `idPermission` INT NOT NULL AUTO_INCREMENT ,
  `nom_tache` VARCHAR(255) NULL ,
  `description` TEXT NULL ,
  `date_creation` DATETIME NULL ,
  `date_update` DATETIME NULL ,
  PRIMARY KEY (`idPermission`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Role_Permission`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Role_Permission` (
  `Role_idRole` INT NOT NULL AUTO_INCREMENT ,
  `Permission_idPermission` INT NOT NULL ,
  INDEX `fk_Role_Permission_Role1` (`Role_idRole` ASC) ,
  PRIMARY KEY (`Permission_idPermission`) ,
  CONSTRAINT `fk_Role_Permission_Role1`
    FOREIGN KEY (`Role_idRole` )
    REFERENCES `mydb`.`Role` (`idRole` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Role_Permission_Permission1`
    FOREIGN KEY (`Permission_idPermission` )
    REFERENCES `mydb`.`Permission` (`idPermission` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Coupon`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Coupon` (
  `idCoupon` INT NOT NULL AUTO_INCREMENT ,
  `code` VARCHAR(45) NULL ,
  `type` VARCHAR(45) NULL ,
  `value` VARCHAR(45) NULL ,
  `percent` VARCHAR(45) NULL ,
  `date_creation` VARCHAR(45) NULL ,
  `date_update` VARCHAR(45) NULL ,
  `Paiement_idPaiement` INT NOT NULL ,
  PRIMARY KEY (`idCoupon`, `Paiement_idPaiement`) ,
  INDEX `fk_Coupon_Paiement1` (`Paiement_idPaiement` ASC) ,
  CONSTRAINT `fk_Coupon_Paiement1`
    FOREIGN KEY (`Paiement_idPaiement` )
    REFERENCES `mydb`.`Paiement` (`idPaiement` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Livraison`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `mydb`.`Livraison` (
  `idLivraison` INT NOT NULL AUTO_INCREMENT ,
  `datelivraison` DATETIME NULL ,
  `date_creation` DATETIME NULL ,
  `Paiement_idPaiement` INT NOT NULL ,
  `Paiement_Reference_livraison_idReference_livraison` INT NOT NULL ,
  PRIMARY KEY (`idLivraison`, `Paiement_idPaiement`, `Paiement_Reference_livraison_idReference_livraison`) ,
  INDEX `fk_Livraison_Paiement1` (`Paiement_idPaiement` ASC, `Paiement_Reference_livraison_idReference_livraison` ASC) ,
  CONSTRAINT `fk_Livraison_Paiement1`
    FOREIGN KEY (`Paiement_idPaiement` , `Paiement_Reference_livraison_idReference_livraison` )
    REFERENCES `mydb`.`Paiement` (`idPaiement` , `Reference_livraison_idReference_livraison` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
