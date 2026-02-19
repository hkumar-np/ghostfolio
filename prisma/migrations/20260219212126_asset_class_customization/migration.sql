-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AssetClass" ADD VALUE 'MONOPLOYMENT';
ALTER TYPE "AssetClass" ADD VALUE 'BONDS_GIC';
ALTER TYPE "AssetClass" ADD VALUE 'EQUITIES';
ALTER TYPE "AssetClass" ADD VALUE 'STRUCTURE_PRODUCTS';
ALTER TYPE "AssetClass" ADD VALUE 'CASH';
ALTER TYPE "AssetClass" ADD VALUE 'PRIVATE_CREDIT';
ALTER TYPE "AssetClass" ADD VALUE 'PRIVATE_EQUITY';
ALTER TYPE "AssetClass" ADD VALUE 'LEVERAGE_BUYOUTS';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "AssetSubClass" ADD VALUE 'BANK';
ALTER TYPE "AssetSubClass" ADD VALUE 'GIC_CAN';
ALTER TYPE "AssetSubClass" ADD VALUE 'GIC_US';
ALTER TYPE "AssetSubClass" ADD VALUE 'FIXED_DEPOSIT';
ALTER TYPE "AssetSubClass" ADD VALUE 'BONDS';
ALTER TYPE "AssetSubClass" ADD VALUE 'STOCKS';
ALTER TYPE "AssetSubClass" ADD VALUE 'ETFS';
ALTER TYPE "AssetSubClass" ADD VALUE 'CRYPTO_CURRENCY';
ALTER TYPE "AssetSubClass" ADD VALUE 'FOREIGN_CURRENCY';
ALTER TYPE "AssetSubClass" ADD VALUE 'MUTUAL_FUNDS';
ALTER TYPE "AssetSubClass" ADD VALUE 'NOTES';
ALTER TYPE "AssetSubClass" ADD VALUE 'RESIDENTIAL';
ALTER TYPE "AssetSubClass" ADD VALUE 'COMMERCIAL';
ALTER TYPE "AssetSubClass" ADD VALUE 'PURPOSE_BUILD';

-- AlterEnum
ALTER TYPE "Type" ADD VALUE 'VOLATILE';
