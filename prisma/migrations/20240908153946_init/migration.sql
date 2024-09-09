-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "studentCode" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentCode")
);

-- CreateTable
CREATE TABLE "ClassAffiliation" (
    "id" SERIAL NOT NULL,
    "classId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "ClassAffiliation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassAffiliation" ADD CONSTRAINT "ClassAffiliation_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassAffiliation" ADD CONSTRAINT "ClassAffiliation_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentCode") ON DELETE RESTRICT ON UPDATE CASCADE;
