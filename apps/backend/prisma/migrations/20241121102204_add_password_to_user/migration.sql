/*
  Warnings:

  - The `payment_methods` column on the `product_detail` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethods" AS ENUM ('CASH', 'CARD', 'PAYPAL', 'APPLE_PAY', 'GOOGLE_PAY');

-- AlterTable
ALTER TABLE "product_detail" DROP COLUMN "payment_methods",
ADD COLUMN     "payment_methods" "PaymentMethods"[];

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "password" TEXT NOT NULL;
