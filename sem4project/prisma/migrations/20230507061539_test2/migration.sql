-- CreateTable
CREATE TABLE "Assignment" (
    "id" TEXT NOT NULL,
    "classCode" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "subjectCode" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "link" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);
