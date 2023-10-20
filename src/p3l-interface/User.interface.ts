import { Document } from "mongoose";

export interface IUser extends Document, UserSchema {
}

export interface UserSchema {
    firstName: string;
    middleName?: string;
    lastName: string;
    fatherName: string;
    motherName: string;
    dateOfBirth: Date;
    isDeleted?: boolean;
    gender: string;
    hiringId: string;
    presentAddress: string;
    isBothAddressSame: boolean;
    permanentAddress: string;
    presentAddrPinCode: number;
    permanentAddrPinCode: number;
    draftMode?: boolean;
    flexibleLeaves?: unknown;
    casualLeaves?: unknown;
    sickLeaves?: unknown;
    earnedLeaves?: unknown;
    maternityLeaves?: unknown;
    paternityLeaves?: unknown;
    sabbaticalLeaves?: unknown;
    currCl?:number;
    nextCl?:number;
    personalEmail: string;
    maritalStatus: string;
    bloodGroup: string;
    experienceBeforePrimus: number;
    projectArea: string;
    kpiView: boolean;
    layerOne: {
        finance: boolean;
        operational:boolean;
        customer: boolean;
        people: boolean;
        brand: boolean;
    },
    layerTwo: {
        finance: boolean;
        operational: boolean;
        customer: boolean;
        people: boolean;
        brand: boolean;
    },
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
        otherDegree: string;
        instituteName: string;
        type: string;
        specialization: string;
        enrollmentYear: string;
        passingYear: string;
        degreeCertificate?: IFilesDetails[];

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
    isOptOutPFDeduction: boolean;
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
    internshipEndDate: Date;
    contractEndDate?: Date;
    retirementDate?: Date;
    employeeNumber?: string;
    reportingManager: string;
    performanceManager: string;
    joiningDate: string;
    dateOfEndPeriod: string;
    offerletter: IFilesDetails[];
    appointmentletter: IFilesDetails[];
    backgroundStatus: string;
    remarkColorCode: string;
    remark: string;
    performanceAppraisal: {
        year: string;
        rating: string;
        appraisalFeedback: IFilesDetails[];
    }[];
    email: string;
    userName: string;
    roles: string[];
    mobileNo: number,
    emergencyNo: number;
    designation: string;
    cost: number;
    costHistory:{cost:number,fiscalYear:string}[]
    level: number;
    location: string;
    defaultRole: string;
    isHR: boolean;
    
    isHrHead: boolean;
    isItManager: boolean;
    isCompliance: boolean;
    isAdmin: boolean;
    isAdminClearance: boolean,
    isFinanceClearance: boolean,
    isItClearance: boolean,
    isHrClearance: boolean,
    isResourceManager: boolean;
    isCfo: boolean;
    isInBonus: boolean;
    isPolicyAuthor: boolean;
    isTemplateAuthor: boolean;
    status: string;
    lastWorkingDay: Date;
    verification: boolean;
    disclaimer1: boolean;
    disclaimer2: boolean;
    gratuity: {
        createdAt: string;
        fileName: string;
        fileKey: string;
    }

    providentFund: {
        isOptOutPFDeduction: boolean;
        year: string,
        form11: {
            createdAt: string;
            fileName: string;
            fileKey: string;
        }
    }[];

    itAssetAllocation: {
        assetId: string;
        assetType: string;
        allocationDate: Date;
        deallocationDate: Date;
        repairReason: string;
    }[];
}

export interface AzureUserListResponse {
    businessPhones: Array<number>,
    displayName: string,
    givenName: string,
    jobTitle: string,
    mail: string,
    mobilePhone: string,
    officeLocation: string,
    preferredLanguage: string,
    surname: string,
    userPrincipalName: string,
    id: string
}

export interface AzureQueryParams {
    nextUrl?: string;
    offset: number
    email?: string
    limit?: number
    searchParams?: string
    skipToken?: string
}
export interface searchQueryParams {
    searchParams: string
    offset: number
    limit: number
}

export interface UserCost {
    designation: string
    cost: number
    fiscalyear: string

}


interface IFilesDetails {
    fileName: string;
    fileKey: string;
    createdAt: Date;
    // url?: string;
}


export interface UserCostDesignation extends Document {
    designation: string;
    fiscalYear: FiscalYear[];
}
export interface FiscalYear {
    year: string;
    cost: number;
}
export interface IuserLeave{
    sickLeaves:number;
    casualLeaves: number;
    flexibleLeaves: number;
    earnedLeaves: number;
}