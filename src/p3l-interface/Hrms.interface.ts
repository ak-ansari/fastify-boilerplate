import { Document } from "mongoose";
import { IFilesDetails } from "./Project.interface";

export interface IHrms extends Document, IHrmsSchema {
}

export interface IHrmsSchema {
    hiringId:string;
    firstName: string;
    middleName?: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    dateOfBirth: Date;
    gender: string;
    presentAddress: string;
    isBothAddresSame: boolean;
    permanentAddress: string;
    pinCode: number;
    mobileNo: string;
    personalEmail: string;
    maritalStatus: string;
    bloodGroup: string;
    photo: IFilesDetails[];
    latestCV: IFilesDetails[];
    signedOfferLetter: IFilesDetails[];
    signedAppointmentLetter: IFilesDetails[];
    familyDetails: {
        name: string;
        relation: string;
        dob: Date;
    }[];
    educationDetails: {
        educationalQualification: string;
        degree: string;
        instituteName: string;
        type: string;
        specialization: string;
        enrollmentYear: string;
        passingYear: string;
        degreeCertificate: IFilesDetails[];

    }[];
    previousWorkExperience: {
        organisationName: string;
        lastDesignation: string;
        lastWorkingDay: string;
        isExperienceCertificate: boolean;
        salarySlip: IFilesDetails[];
        resignationAcceptance: IFilesDetails[];
        experienceCertificate: IFilesDetails[];
    }[];
    certifications: {
        name: string;
        otherCertificationName: string;
        completionDate: string;
        issuingAuthorityName: string;
        isCertificateValidity: boolean;
        expiryDate: string;
        certificate: IFilesDetails[];
    }[];
    aadharNumber: string;
    panNumber: string;
    panCopy: IFilesDetails[];
    aadharCopy: IFilesDetails[];
    passportCopy: IFilesDetails[];
    passportNumber: string;
    passportExpiryDate: string;
    bankName: string;
    otherBankName: string;
    bankAccountName: string;
    accountNumber: string;
    ifscCode: string;
    cancelledCheque: IFilesDetails[];
    uan: string;
    isPFDeduction: boolean;
    trainingsCompleted: {
        courseName: string;
        conductedBy: string;
        mode: string;
        fromDate: string;
        toDate: string;
        trainingTotalHrs: string;
        trainingCertificate: IFilesDetails[];
    }[];
    employeeType: string;
    internshipEndDate?: Date;
    contractEndDate?: Date;
    retirementDate?: Date;
    employeeNumber: string;
    designation: string;
    baseLocation: string;
    reportingManager: string;
    performanceManager: string;
    joiningDate: string;
    dateOfEndPeriod: string,
    offerletter: IFilesDetails[];
    appointmentletter: IFilesDetails[];
    status: string;
    remarkColorCode: string;
    remark: string;
    performanceAppraisal: {
        year: string;
        rating: string;
        appraisalFeedback: IFilesDetails[];
    }[];
    itAssetAllocation: {
        assetId: string;
        assetType: string;
        allocationDate: Date;
    }[];
    disclaimer1: boolean;
    disclaimer2: boolean;
    gratuity: {
        createdAt: string;
        fileName: string;
        fileKey: string;
    }
}

// export interface IFilesDetails {
//     fileName: string;
//     fileKey: string;
//     createdAt: Date;
//     url?: string;
// }

export interface IHiring extends Document, IHiringOnBoarding {
}

export interface IHiringOnBoarding {
    yearsOfExperienceMin: number;
    yearsOfExperienceMax: number;
    education: string;
    status: string,
    rejectNote: string,
    candidateStatus: string,
    baseLocation: string;
    completedBaseLocation: string;
    workLocation: string;
    minDesignation: string;
    maxDesignation: string;
    designationName: string;
    expectedJoiningDate: Date;
    joiningDate: Date;
    type: string;
    proposedProject: any;
    completedProject: string;
    otherProjectName: string;
    hiringType: string;
    empList: string;
    hiringId:string;
    files: IFilesDetails[];
    cv: IFilesDetails[];
    createdBy: string;
    updatedBy: string;
    completedBy: string;
    rejectedBy: string;
    otherCompletedProjectName: string;
}


// export interface IFilesDetails {
//     fileName: string;
//     fileKey: string;
//     createdAt: Date;
//     url?: string;
// }

export interface IBusinessCard extends Document {
    userName: string;
    mobileNo: string;
    location: string;
    email: string;
    designation: string;
}
