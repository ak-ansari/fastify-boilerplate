import { Document } from "mongoose";

export interface AppraisalSchema extends Document, IAppraisal { }

interface IAppraisal {
    employeeName: string,
    doj: Date,
    designation: string,
    subLevel: string,
    rmName: string,
    rmId: string,
    pmName: string,
    pmId: string,
    serviceLine: string,
    createdBy: string,
    updatedBy: string,
    status: "initiated" | "draft" | "approved" | "released",
    projectDetails: projectDetail[],
    consultant1: {
        researchClientIssueFB: string;
        researchClientIssueDesc: string;
        researchClientIssueRM: boolean,
        researchClientIssueRMDesc: string,
        cogentAnalysisFB: string,
        cogentAnalysisDesc: string,
        cogentAnalysisRM: boolean,
        cogentAnalysisRMDesc: string,
        identifyPSkillsFB: string,
        identifyPSkillsDesc: string,
        identifyPSkillsRM: boolean,
        identifyPSkillsRMDesc: string,
        groupActivitiesFB: string,
        groupActivitiesDesc: string,
        groupActivitiesRM: boolean,
        groupActivitiesRMDesc: string,
        lAndDFB: string,
        lAndDDesc: string,
        lAndDRM: boolean,
        lAndDRMDesc: string,
    };
    consultant2: {
        independentResFB: string,
        independentResDesc: string,
        independentResRM: boolean,
        independentResRMDesc: string,
        analysisInsightsFB: string,
        analysisInsightsDesc: string,
        analysisInsightsRM: boolean,
        analysisInsightsRMDesc: string,
        developFuncSkillFB: string,
        developFuncSkillDesc: string,
        developFuncSkillRM: boolean,
        developFuncSkillRMDesc: string,
        assistTeamBuildFB: string,
        assistTeamBuildDesc: string,
        assistTeamBuildRM: boolean,
        assistTeamBuildRMDesc: string,
        partLAndDFB: string,
        partLAndDDesc: string,
        partLAndDRM: boolean,
        partLAndDRMDesc: string,
        supportKmFB: string,
        supportKmDesc: string,
        supportKmRM: boolean,
        supportKmRMDesc: string,
    };
    srConsultant1: {
        assistStoryBFB: string,
        assistStoryBDesc: string,
        assistStoryBRM: boolean,
        assistStoryBRMDesc: string,
        driveResearchPFB: string,
        driveResearchPDesc: string,
        driveResearchPRM: boolean,
        driveResearchPRMDesc: string,
        pptSkillsFB: string,
        pptSkillsDesc: string,
        pptSkillsRM: boolean,
        pptSkillsRMDesc: string,
        masterFuncSkillFB: string,
        masterFuncSkillDesc: string,
        masterFuncSkillRM: boolean,
        masterFuncSkillRMDesc: string,
        knowledgeMgmtFB: string,
        knowledgeMgmtDesc: string,
        knowledgeMgmtRM: boolean,
        knowledgeMgmtRMDesc: string,
        lAndDFB: string,
        lAndDDesc: string,
        lAndDRM: boolean,
        lAndDRMDesc: string,
    };
    srConsultant2: {
        responsibleStoryBFB: string,
        responsibleStoryBDesc: string,
        responsibleStoryBRM: boolean,
        responsibleStoryBRMDesc: string,
        reportWritingFB: string,
        reportWritingDesc: string,
        reportWritingRM: boolean,
        reportWritingRMDesc: string,
        leadTeamBuildFB: string,
        leadTeamBuildDesc: string,
        leadTeamBuildRM: boolean,
        leadTeamBuildRMDesc: string,
        identifySectorFB: string,
        identifySectorDesc: string,
        identifySectorRM: boolean,
        identifySectorRMDesc: string,
        createTemplatesFB: string,
        createTemplatesDesc: string,
        createTemplatesRM: boolean,
        createTemplatesRMDesc: string,
        lAndDFB: string,
        lAndDDesc: string,
        lAndDRM: boolean,
        lAndDRMDesc: string,
    };
    manager1: {
        leadClientInteractnFB: string,
        leadClientInteractnDesc: string,
        leadClientInteractnRM: boolean,
        leadClientInteractnRMDesc: string,
        defineReportStructFB: string,
        defineReportStructDesc: string,
        defineReportStructRM: boolean,
        defineReportStructRMDesc: string,
        leadPptFB: string,
        leadPptDesc: string,
        leadPptRM: boolean,
        leadPptRMDesc: string,
        trackSectorActiFB: string,
        trackSectorActiDesc: string,
        trackSectorActiRM: boolean,
        trackSectorActiRMDesc: string,
        createWorkProductFB: string,
        createWorkProductDesc: string,
        createWorkProductRM: boolean,
        createWorkProductRMDesc: string,
        timelyDeliveryFB: string,
        timelyDeliveryDesc: string,
        timelyDeliveryRM: boolean,
        timelyDeliveryRMDesc: string
    };
    manager2: {
        leadClientIndepFB: string,
        leadClientIndepDesc: string,
        leadClientIndepRM: boolean,
        leadClientIndepRMDesc: string,
        reportPreparatnFB: string,
        reportPreparatnDesc: string,
        reportPreparatnRM: boolean,
        reportPreparatnRMDesc: string,
        identifyNewSkillFB: string,
        identifyNewSkillDesc: string,
        identifyNewSkillRM: boolean,
        identifyNewSkillRMDesc: string,
        dAndSSectorDevlpFB: string,
        dAndSSectorDevlpDesc: string,
        dAndSSectorDevlpRM: boolean,
        dAndSSectorDevlpRMDesc: string,
        proposalPreparnFB: string,
        proposalPreparnDesc: string,
        proposalPreparnRM: boolean,
        proposalPreparnRMDesc: string,
        lAndDFB: string,
        lAndDDesc: string,
        lAndDRM: boolean,
        lAndDRMDesc: string
    };
    manager3: {
        independntReportFB: string,
        independntReportDesc: string,
        independntReportRM: boolean,
        independntReportRMDesc: string,
        smallProjectsFB: string,
        smallProjectsDesc: string,
        smallProjectsRM: boolean,
        smallProjectsRMDesc: string,
        aquireOneSkillFB: string,
        aquireOneSkillDesc: string,
        aquireOneSkillRM: boolean,
        aquireOneSkillRMDesc: string,
        writeSectorIssueFB: string,
        writeSectorIssueDesc: string,
        writeSectorIssueRM: boolean,
        writeSectorIssueRMDesc: string,
        knowledgeMgmtFB: string,
        knowledgeMgmtDesc: string,
        knowledgeMgmtRM: boolean,
        knowledgeMgmtRMDesc: string,
    };
    avp1: {
        consistentManageFB: string,
        consistentManageDesc: string,
        consistentManageRM: boolean,
        consistentManageRMDesc: string,
        clientRecognizeFB: string,
        clientRecognizeDesc: string,
        clientRecognizeRM: boolean,
        clientRecognizeRMDesc: string,
        buildTeamsFB: string,
        buildTeamsDesc: string,
        buildTeamsRM: boolean,
        buildTeamsRMDesc: string,
        consProductiveFB: string,
        consProductiveDesc: string,
        consProductiveRM: boolean,
        consProductiveRMDesc: string,
        proposalPreparnFB: string,
        proposalPreparnDesc: string,
        proposalPreparnRM: boolean,
        proposalPreparnRMDesc: string,
        supportReachFB: string,
        supportReachDesc: string,
        supportReachRM: boolean,
        supportReachRMDesc: string
    };
    avp2: {
        operationRespFB: string,
        operationRespDesc: string,
        operationRespRM: boolean,
        operationRespRMDesc: string,
        clientPptFB: string,
        clientPptDesc: string,
        clientPptRM: boolean,
        clientPptRMDesc: string,
        guideTeamsFB: string,
        guideTeamsDesc: string,
        guideTeamsRM: boolean,
        guideTeamsRMDesc: string,
        beyondOwnProjectFB: string,
        beyondOwnProjectDesc: string,
        beyondOwnProjectRM: boolean,
        beyondOwnProjectRMDesc: string,
        leadProposalFB: string,
        leadProposalDesc: string,
        leadProposalRM: boolean,
        leadProposalRMDesc: string,
        contentForLDFB: string,
        contentForLDDesc: string,
        contentForLDRM: boolean,
        contentForLDRMDesc: string
    };
    avp3: {
        manageTwoFB: string,
        manageTwoDesc: string,
        manageTwoRM: boolean,
        manageTwoRMDesc: string,
        deepExpertiseFB: string,
        deepExpertiseDesc: string,
        deepExpertiseRM: boolean,
        deepExpertiseRMDesc: string,
        beyondOwnFB: string,
        beyondOwnDesc: string,
        beyondOwnRM: boolean,
        beyondOwnRMDesc: string,
        industryEngageFB: string,
        industryEngageDesc: string,
        industryEngageRM: boolean,
        industryEngageRMDesc: string,
        createArtefactsFB: string,
        createArtefactsDesc: string,
        createArtefactsRM: boolean,
        createArtefactsRMDesc: string,
        lAndDDeliveryFB: string,
        lAndDDeliveryDesc: string,
        lAndDDeliveryRM: boolean,
        lAndDDeliveryRMDesc: string
    };
    vp1: {
        engagemtStrategyFB: string,
        engagemtStrategyDesc: string,
        engagemtStrategyRM: boolean,
        engagemtStrategyRMDesc: string,
        insightsDrivenFB: string,
        insightsDrivenDesc: string,
        insightsDrivenRM: boolean,
        insightsDrivenRMDesc: string,
        takeUpActivityFB: string,
        takeUpActivityDesc: string,
        takeUpActivityRM: boolean,
        takeUpActivityRMDesc: string,
        thoughtLeadFB: string,
        thoughtLeadDesc: string,
        thoughtLeadRM: boolean,
        thoughtLeadRMDesc: string,
        leadLAndDFB: string,
        leadLAndDDesc: string,
        leadLAndDRM: boolean,
        leadLAndDRMDesc: string
    };
    vp2: {
        assistMdFB: string,
        assistMdDesc: string,
        assistMdRM: boolean,
        assistMdRMDesc: string,
        leadClientDFB: string,
        leadClientDDesc: string,
        leadClientDRM: boolean,
        leadClientDRMDesc: string,
        peopleForFirmFB: string,
        peopleForFirmDesc: string,
        peopleForFirmRM: boolean,
        peopleForFirmRMDesc: string,
        newBusinessFB: string,
        newBusinessDesc: string,
        newBusinessRM: boolean,
        newBusinessRMDesc: string,
        supportCompanyFB: string,
        supportCompanyDesc: string,
        supportCompanyRM: boolean,
        supportCompanyRMDesc: string
    };
    vp3: {
        serviceLineFB: string,
        serviceLineDesc: string,
        serviceLineRM: boolean,
        serviceLineRMDesc: string,
        marketRecognitnFB: string,
        marketRecognitnDesc: string,
        marketRecognitnRM: boolean,
        marketRecognitnRMDesc: string,
        peopleChampionFB: string,
        peopleChampionDesc: string,
        peopleChampionRM: boolean,
        peopleChampionRMDesc: string,
        hiringInventoryFB: string,
        hiringInventoryDesc: string,
        hiringInventoryRM: boolean,
        hiringInventoryRMDesc: string,
        masterlyFB: string,
        masterlyDesc: string,
        masterlyRM: boolean,
        masterlyRMDesc: string
    };
    vp4: {
        refPointFB: string,
        refPointDesc: string,
        refPointRM: boolean,
        refPointRMDesc: string,
        marketRecognFB: string,
        marketRecognDesc: string,
        marketRecognRM: boolean,
        marketRecognRMDesc: string,
        speakingFB: string,
        speakingDesc: string,
        speakingRM: boolean,
        speakingRMDesc: string,
        opinionPiecesFB: string,
        opinionPiecesDesc: string,
        opinionPiecesRM: boolean,
        opinionPiecesRMDesc: string,
        pAndLFB: string,
        pAndLDesc: string,
        pAndLRM: boolean,
        pAndLRMDesc: string
    };
    section3: {
        attendanceFB: string,
        attendanceDesc: string,
        attendanceMgr: boolean,
        attendanceMgrDesc: string,
        attendanceTeamsFB: string,
        attendanceTeamsDesc: string,
        attendanceTeamsMgr: boolean,
        attendanceTeamsMgrDesc: string,
        submitDocumentFB: string,
        submitDocumentDesc: string,
        submitDocumentMgr: boolean,
        submitDocumentMgrDesc: string,
        fillingLeavesFB: string,
        fillingLeavesDesc: string,
        fillingLeavesMgr: boolean,
        fillingLeavesMgrDesc: string,
        lAndDHoursFB: string,
        lAndDHoursDesc: string,
        lAndDHoursMgr: boolean,
        lAndDHoursMgrDesc: string,
        fillingTimesheetFB: string,
        fillingTimesheetDesc: string,
        fillingTimesheetMgr: boolean,
        fillingTimesheetMgrDesc: string,
        hourMappingFB: string,
        hourMappingDesc: string,
        hourMappingMgr: boolean,
        hourMappingMgrDesc: string,
        clientMeetFB: string,
        clientMeetDesc: string,
        clientMeetMgr: boolean,
        clientMeetMgrDesc: string,
        meetAgendaFB: string,
        meetAgendaDesc: string,
        meetAgendaMgr: boolean,
        meetAgendaMgrDesc: string,
        momMeetFB: string,
        momMeetDesc: string,
        momMeetMgr: boolean,
        momMeetMgrDesc: string
    };
    trainingRequirements: trainingRequirement[];
    mdComment: string,
}

interface projectDetail {
    category: string;
    project: string;
    workStartDt: Date;
    cOrO: string;
    workEndDt: Date;
    projectManager: string;
    projectDirector: string;
}
interface trainingRequirement {
    trainingName: string;
    selfAssessment: string;
    recommendationRm: string;
}