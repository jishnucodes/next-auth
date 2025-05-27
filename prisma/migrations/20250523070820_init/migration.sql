-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "fullName" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" DATETIME NOT NULL,
    "createdBy" INTEGER,
    "modifiedBy" INTEGER
);
INSERT INTO "new_User" ("createdAt", "createdBy", "email", "fullName", "hashedPassword", "id", "modifiedAt", "modifiedBy") SELECT "createdAt", "createdBy", "email", "fullName", "hashedPassword", "id", "modifiedAt", "modifiedBy" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
