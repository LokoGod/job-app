/*
  Warnings:

  - You are about to drop the column `name` on the `customer` table. All the data in the column will be lost.
  - Added the required column `cusName` to the `Customer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `customer` DROP COLUMN `name`,
    ADD COLUMN `cusName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `job` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'pending';
