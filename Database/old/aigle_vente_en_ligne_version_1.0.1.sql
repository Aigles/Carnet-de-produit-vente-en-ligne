-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Sam 07 Avril 2018 à 23:22
-- Version du serveur :  5.1.62-community
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `aigle_vente_en_ligne`
--

-- --------------------------------------------------------

--
-- Structure de la table `caracteristiques`
--

CREATE TABLE IF NOT EXISTS `caracteristiques` (
  `idCaracteristiques` int(11) NOT NULL AUTO_INCREMENT,
  `couleur` varchar(255) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `prix` double NOT NULL,
  `image` text,
  `quantite` int(11) DEFAULT NULL,
  `Caracteristiquescol` varchar(45) NOT NULL,
  `Produit_idProduit` int(11) NOT NULL,
  PRIMARY KEY (`idCaracteristiques`),
  KEY `fk_Caracteristiques_Produit` (`Produit_idProduit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE IF NOT EXISTS `categorie` (
  `idCategorie` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `categorie`
--

INSERT INTO `categorie` (`idCategorie`, `type`, `date_creation`, `date_update`) VALUES
(1, 'Men', '2018-03-18 20:12:42', '2018-03-18 20:12:42'),
(2, 'Men', '2018-03-18 20:14:24', '2018-03-18 20:14:24');

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE IF NOT EXISTS `commande` (
  `idCommande` int(11) NOT NULL AUTO_INCREMENT,
  `date_commande` datetime NOT NULL,
  `quantite` int(11) NOT NULL,
  `date_update` datetime DEFAULT NULL,
  `Users_idUsers` int(11) NOT NULL,
  `Paiement_idPaiement` int(11) NOT NULL,
  `Paiement_Reference_livraison_idReference_livraison` int(11) NOT NULL,
  PRIMARY KEY (`idCommande`,`Users_idUsers`,`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  KEY `fk_Commande_Users1` (`Users_idUsers`),
  KEY `fk_Commande_Paiement1` (`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `coupon`
--

CREATE TABLE IF NOT EXISTS `coupon` (
  `idCoupon` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `value` varchar(45) DEFAULT NULL,
  `percent` varchar(45) DEFAULT NULL,
  `date_creation` varchar(45) DEFAULT NULL,
  `date_update` varchar(45) DEFAULT NULL,
  `Paiement_idPaiement` int(11) NOT NULL,
  PRIMARY KEY (`idCoupon`,`Paiement_idPaiement`),
  KEY `fk_Coupon_Paiement1` (`Paiement_idPaiement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `livraison`
--

CREATE TABLE IF NOT EXISTS `livraison` (
  `idLivraison` int(11) NOT NULL AUTO_INCREMENT,
  `datelivraison` datetime DEFAULT NULL,
  `date_creation` datetime DEFAULT NULL,
  `Paiement_idPaiement` int(11) NOT NULL,
  `Paiement_Reference_livraison_idReference_livraison` int(11) NOT NULL,
  PRIMARY KEY (`idLivraison`,`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  KEY `fk_Livraison_Paiement1` (`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `paiement`
--

CREATE TABLE IF NOT EXISTS `paiement` (
  `idPaiement` int(11) NOT NULL AUTO_INCREMENT,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `Reference_livraison_idReference_livraison` int(11) NOT NULL,
  PRIMARY KEY (`idPaiement`,`Reference_livraison_idReference_livraison`),
  KEY `fk_Paiement_Reference_livraison1` (`Reference_livraison_idReference_livraison`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `permission`
--

CREATE TABLE IF NOT EXISTS `permission` (
  `idPermission` int(11) NOT NULL AUTO_INCREMENT,
  `nom_tache` varchar(255) DEFAULT NULL,
  `description` text,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  PRIMARY KEY (`idPermission`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE IF NOT EXISTS `produit` (
  `idProduit` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `nbre_like` int(11) DEFAULT '0',
  `nbre_vendu` int(11) DEFAULT '0',
  `nbre_en_stock` int(11) NOT NULL DEFAULT '0',
  `rabais` double DEFAULT '0',
  `Date_creation` datetime DEFAULT NULL,
  `Date_update` datetime DEFAULT NULL,
  `Activer` tinyint(1) NOT NULL,
  `Categorie_idCategorie` int(11) NOT NULL,
  PRIMARY KEY (`idProduit`),
  KEY `fk_Produit_Categorie1` (`Categorie_idCategorie`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `produit`
--

INSERT INTO `produit` (`idProduit`, `nom`, `description`, `nbre_like`, `nbre_vendu`, `nbre_en_stock`, `rabais`, `Date_creation`, `Date_update`, `Activer`, `Categorie_idCategorie`) VALUES
(1, 'Jeans', 'Jeans blanc', 0, 0, 23, 0, '2018-03-18 22:00:02', '2018-03-18 22:00:02', 0, 2),
(2, 'Jeans jupe', 'Jeans blanc', 0, 0, 23, 0, '2018-03-18 22:01:24', '2018-03-18 22:01:24', 0, 2),
(3, 'Robe', 'une robe blanche et stylee', 2, 20, 50, 20, '2018-03-19 00:00:00', '2018-03-19 00:00:00', 0, 2),
(4, 'Robe', 'une robe blanche et stylee', 2, 0, 50, 20, '2018-03-19 00:00:00', '2018-03-19 00:00:00', 0, 2);

-- --------------------------------------------------------

--
-- Structure de la table `produit_commande`
--

CREATE TABLE IF NOT EXISTS `produit_commande` (
  `Produit_idProduit` int(11) NOT NULL,
  `Commande_idCommande` int(11) NOT NULL,
  PRIMARY KEY (`Produit_idProduit`,`Commande_idCommande`),
  KEY `fk_Produit_Commande_Commande1` (`Commande_idCommande`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `reference_livraison`
--

CREATE TABLE IF NOT EXISTS `reference_livraison` (
  `idReference_livraison` int(11) NOT NULL AUTO_INCREMENT,
  `date_livraison` datetime NOT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `rue` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `codePostal` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) NOT NULL,
  PRIMARY KEY (`idReference_livraison`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `role`
--

CREATE TABLE IF NOT EXISTS `role` (
  `idRole` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`idRole`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `role_permission`
--

CREATE TABLE IF NOT EXISTS `role_permission` (
  `Role_idRole` int(11) NOT NULL AUTO_INCREMENT,
  `Permission_idPermission` int(11) NOT NULL,
  PRIMARY KEY (`Permission_idPermission`),
  KEY `fk_Role_Permission_Role1` (`Role_idRole`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `idUsers` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `date_derniere_connection` datetime NOT NULL,
  `etat_connection` tinyint(1) DEFAULT NULL,
  `avatar` text,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `Role_idRole` int(11) NOT NULL,
  PRIMARY KEY (`idUsers`,`Role_idRole`),
  KEY `fk_Users_Role1` (`Role_idRole`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `caracteristiques`
--
ALTER TABLE `caracteristiques`
  ADD CONSTRAINT `fk_Caracteristiques_Produit` FOREIGN KEY (`Produit_idProduit`) REFERENCES `produit` (`idProduit`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `fk_Commande_Paiement1` FOREIGN KEY (`Paiement_idPaiement`, `Paiement_Reference_livraison_idReference_livraison`) REFERENCES `paiement` (`idPaiement`, `Reference_livraison_idReference_livraison`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Commande_Users1` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `coupon`
--
ALTER TABLE `coupon`
  ADD CONSTRAINT `fk_Coupon_Paiement1` FOREIGN KEY (`Paiement_idPaiement`) REFERENCES `paiement` (`idPaiement`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `fk_Livraison_Paiement1` FOREIGN KEY (`Paiement_idPaiement`, `Paiement_Reference_livraison_idReference_livraison`) REFERENCES `paiement` (`idPaiement`, `Reference_livraison_idReference_livraison`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `fk_Paiement_Reference_livraison1` FOREIGN KEY (`Reference_livraison_idReference_livraison`) REFERENCES `reference_livraison` (`idReference_livraison`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `fk_Produit_Categorie1` FOREIGN KEY (`Categorie_idCategorie`) REFERENCES `categorie` (`idCategorie`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `produit_commande`
--
ALTER TABLE `produit_commande`
  ADD CONSTRAINT `fk_Produit_Commande_Commande1` FOREIGN KEY (`Commande_idCommande`) REFERENCES `commande` (`idCommande`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Produit_Commande_Produit1` FOREIGN KEY (`Produit_idProduit`) REFERENCES `produit` (`idProduit`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `role_permission`
--
ALTER TABLE `role_permission`
  ADD CONSTRAINT `fk_Role_Permission_Permission1` FOREIGN KEY (`Permission_idPermission`) REFERENCES `permission` (`idPermission`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Role_Permission_Role1` FOREIGN KEY (`Role_idRole`) REFERENCES `role` (`idRole`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_Users_Role1` FOREIGN KEY (`Role_idRole`) REFERENCES `role` (`idRole`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
