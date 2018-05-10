-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 02, 2018 at 07:12 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aigle_vente_en_ligne`
--

-- --------------------------------------------------------

--
-- Table structure for table `caracteristiques`
--

CREATE TABLE `caracteristiques` (
  `idCaracteristiques` int(11) NOT NULL,
  `couleur` varchar(255) NOT NULL,
  `size` int(11) DEFAULT NULL,
  `prix` double NOT NULL,
  `image` longtext,
  `quantite` int(11) DEFAULT NULL,
  `Produit_idProduit` int(11) NOT NULL,
  `image_1` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categorie`
--

CREATE TABLE `categorie` (
  `idCategorie` int(11) NOT NULL,
  `type` varchar(255) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categorie`
--

INSERT INTO `categorie` (`idCategorie`, `type`, `date_creation`, `date_update`) VALUES
(7, 'Homme', '2018-05-01 22:49:02', '2018-05-01 22:51:38'),
(8, 'Femmes', '2018-05-01 22:49:30', '2018-05-01 22:53:07'),
(9, 'Enfant', '2018-05-01 22:49:37', '2018-05-01 22:50:58');

-- --------------------------------------------------------

--
-- Table structure for table `commande`
--

CREATE TABLE `commande` (
  `idCommande` int(11) NOT NULL,
  `date_commande` datetime NOT NULL,
  `quantite` int(11) NOT NULL,
  `date_update` datetime DEFAULT NULL,
  `Users_idUsers` int(11) NOT NULL,
  `Paiement_idPaiement` int(11) NOT NULL,
  `Paiement_Reference_livraison_idReference_livraison` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE `coupon` (
  `idCoupon` int(11) NOT NULL,
  `code` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `value` varchar(45) DEFAULT NULL,
  `percent` varchar(45) DEFAULT NULL,
  `date_creation` varchar(45) DEFAULT NULL,
  `date_update` varchar(45) DEFAULT NULL,
  `Paiement_idPaiement` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `livraison`
--

CREATE TABLE `livraison` (
  `idLivraison` int(11) NOT NULL,
  `datelivraison` datetime DEFAULT NULL,
  `date_creation` datetime DEFAULT NULL,
  `Paiement_idPaiement` int(11) NOT NULL,
  `Paiement_Reference_livraison_idReference_livraison` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `paiement`
--

CREATE TABLE `paiement` (
  `idPaiement` int(11) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `Reference_livraison_idReference_livraison` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `idPermission` int(11) NOT NULL,
  `nom_tache` varchar(255) DEFAULT NULL,
  `description` text,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE `produit` (
  `idProduit` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `nbre_like` int(11) DEFAULT '0',
  `nbre_vendu` int(11) DEFAULT '0',
  `nbre_en_stock` int(11) NOT NULL DEFAULT '0',
  `rabais` double DEFAULT '0',
  `Date_creation` datetime DEFAULT NULL,
  `Date_update` datetime DEFAULT NULL,
  `Activer` tinyint(1) NOT NULL,
  `Categorie_idCategorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `produit_commande`
--

CREATE TABLE `produit_commande` (
  `Produit_idProduit` int(11) NOT NULL,
  `Commande_idCommande` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `reference_livraison`
--

CREATE TABLE `reference_livraison` (
  `idReference_livraison` int(11) NOT NULL,
  `date_livraison` datetime NOT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `rue` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `codePostal` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `idRole` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`idRole`, `nom`, `description`, `date_creation`, `date_update`) VALUES
(6, 'Administrateurs', 'Pour les administrateurs du systeme', '2018-05-01 23:24:26', '2018-05-02 02:00:12'),
(7, 'Personnels', 'Pour les differents personnels qui auront a travailler sur le systeme', '2018-05-01 23:39:18', '2018-05-02 02:00:23'),
(11, 'Clients', 'Pour nos differents clients', '2018-05-02 02:27:59', '2018-05-02 02:27:59');

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `Role_idRole` int(11) NOT NULL,
  `Permission_idPermission` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `date_derniere_connection` datetime NOT NULL,
  `etat_connection` tinyint(1) DEFAULT NULL,
  `avatar` text,
  `date_creation` datetime DEFAULT NULL,
  `date_update` datetime DEFAULT NULL,
  `Role_idRole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUsers`, `nom`, `prenom`, `email`, `password`, `date_derniere_connection`, `etat_connection`, `avatar`, `date_creation`, `date_update`, `Role_idRole`) VALUES
(3, 'Phili', 'Kendy', 'kenphiliboy@gmail.com', 'tabie123', '2018-05-01 07:21:20', 1, 'moi', '2018-05-02 07:16:18', '2018-05-02 05:15:14', 11);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `caracteristiques`
--
ALTER TABLE `caracteristiques`
  ADD PRIMARY KEY (`idCaracteristiques`),
  ADD KEY `fk_Caracteristiques_Produit` (`Produit_idProduit`);

--
-- Indexes for table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`idCategorie`);

--
-- Indexes for table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`idCommande`,`Users_idUsers`,`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  ADD KEY `fk_Commande_Users1` (`Users_idUsers`),
  ADD KEY `fk_Commande_Paiement1` (`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  ADD KEY `Paiement_Reference_livraison_idReference_livraison` (`Paiement_Reference_livraison_idReference_livraison`);

--
-- Indexes for table `coupon`
--
ALTER TABLE `coupon`
  ADD PRIMARY KEY (`idCoupon`,`Paiement_idPaiement`),
  ADD KEY `fk_Coupon_Paiement1` (`Paiement_idPaiement`);

--
-- Indexes for table `livraison`
--
ALTER TABLE `livraison`
  ADD PRIMARY KEY (`idLivraison`,`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  ADD KEY `fk_Livraison_Paiement1` (`Paiement_idPaiement`,`Paiement_Reference_livraison_idReference_livraison`),
  ADD KEY `Paiement_Reference_livraison_idReference_livraison` (`Paiement_Reference_livraison_idReference_livraison`);

--
-- Indexes for table `paiement`
--
ALTER TABLE `paiement`
  ADD PRIMARY KEY (`idPaiement`,`Reference_livraison_idReference_livraison`),
  ADD KEY `fk_Paiement_Reference_livraison1` (`Reference_livraison_idReference_livraison`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`idPermission`);

--
-- Indexes for table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`idProduit`),
  ADD KEY `fk_Produit_Categorie1` (`Categorie_idCategorie`);

--
-- Indexes for table `produit_commande`
--
ALTER TABLE `produit_commande`
  ADD PRIMARY KEY (`Produit_idProduit`,`Commande_idCommande`),
  ADD KEY `fk_Produit_Commande_Commande1` (`Commande_idCommande`);

--
-- Indexes for table `reference_livraison`
--
ALTER TABLE `reference_livraison`
  ADD PRIMARY KEY (`idReference_livraison`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`idRole`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`Permission_idPermission`),
  ADD KEY `fk_Role_Permission_Role1` (`Role_idRole`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`,`Role_idRole`),
  ADD KEY `fk_Users_Role1` (`Role_idRole`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `caracteristiques`
--
ALTER TABLE `caracteristiques`
  MODIFY `idCaracteristiques` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT for table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `idCategorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `commande`
--
ALTER TABLE `commande`
  MODIFY `idCommande` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `coupon`
--
ALTER TABLE `coupon`
  MODIFY `idCoupon` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `livraison`
--
ALTER TABLE `livraison`
  MODIFY `idLivraison` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `paiement`
--
ALTER TABLE `paiement`
  MODIFY `idPaiement` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `idPermission` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `produit`
--
ALTER TABLE `produit`
  MODIFY `idProduit` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `reference_livraison`
--
ALTER TABLE `reference_livraison`
  MODIFY `idReference_livraison` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `idRole` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `role_permission`
--
ALTER TABLE `role_permission`
  MODIFY `Role_idRole` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `caracteristiques`
--
ALTER TABLE `caracteristiques`
  ADD CONSTRAINT `caracteristiques_ibfk_1` FOREIGN KEY (`Produit_idProduit`) REFERENCES `produit` (`idProduit`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`Paiement_Reference_livraison_idReference_livraison`) REFERENCES `paiement` (`Reference_livraison_idReference_livraison`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`Users_idUsers`) REFERENCES `users` (`idUsers`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commande_ibfk_3` FOREIGN KEY (`Paiement_idPaiement`) REFERENCES `paiement` (`idPaiement`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `coupon`
--
ALTER TABLE `coupon`
  ADD CONSTRAINT `coupon_ibfk_1` FOREIGN KEY (`Paiement_idPaiement`) REFERENCES `paiement` (`idPaiement`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `livraison`
--
ALTER TABLE `livraison`
  ADD CONSTRAINT `livraison_ibfk_1` FOREIGN KEY (`Paiement_idPaiement`) REFERENCES `paiement` (`idPaiement`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `livraison_ibfk_2` FOREIGN KEY (`Paiement_Reference_livraison_idReference_livraison`) REFERENCES `paiement` (`Reference_livraison_idReference_livraison`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `paiement`
--
ALTER TABLE `paiement`
  ADD CONSTRAINT `paiement_ibfk_1` FOREIGN KEY (`Reference_livraison_idReference_livraison`) REFERENCES `reference_livraison` (`idReference_livraison`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `produit`
--
ALTER TABLE `produit`
  ADD CONSTRAINT `produit_ibfk_1` FOREIGN KEY (`Categorie_idCategorie`) REFERENCES `categorie` (`idCategorie`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `produit_commande`
--
ALTER TABLE `produit_commande`
  ADD CONSTRAINT `produit_commande_ibfk_1` FOREIGN KEY (`Produit_idProduit`) REFERENCES `produit` (`idProduit`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `produit_commande_ibfk_2` FOREIGN KEY (`Commande_idCommande`) REFERENCES `commande` (`idCommande`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD CONSTRAINT `role_permission_ibfk_1` FOREIGN KEY (`Role_idRole`) REFERENCES `role` (`idRole`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `role_permission_ibfk_2` FOREIGN KEY (`Permission_idPermission`) REFERENCES `permission` (`idPermission`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`Role_idRole`) REFERENCES `role` (`idRole`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
