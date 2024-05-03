-- DropIndex
DROP INDEX "parts_brand_id_idx";

-- DropIndex
DROP INDEX "parts_segment_id_idx";

-- CreateIndex
CREATE INDEX "parts_segment_id_brand_id_idx" ON "parts"("segment_id", "brand_id");
