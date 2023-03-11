-- CreateTable
CREATE TABLE "Seguir" (
    "seguidorId" TEXT NOT NULL,
    "seguindoId" TEXT NOT NULL,

    CONSTRAINT "Seguir_pkey" PRIMARY KEY ("seguidorId","seguindoId")
);

-- AddForeignKey
ALTER TABLE "Seguir" ADD CONSTRAINT "Seguir_seguidorId_fkey" FOREIGN KEY ("seguidorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seguir" ADD CONSTRAINT "Seguir_seguindoId_fkey" FOREIGN KEY ("seguindoId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
