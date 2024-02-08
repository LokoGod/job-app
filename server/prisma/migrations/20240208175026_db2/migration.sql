-- CreateTable
CREATE TABLE `JobList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jobId` VARCHAR(191) NOT NULL,
    `jobError` VARCHAR(191) NOT NULL,
    `jobDescription` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Device` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Customer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `phoneNum` INTEGER NOT NULL,
    `phoneNum2` INTEGER NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `Customer_phoneNum_key`(`phoneNum`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
