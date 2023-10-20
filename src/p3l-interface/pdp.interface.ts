import mongoose, { Document } from "mongoose";

export interface PdpSchema extends Document, IPdp { }

export interface IPdp {
    isInBonus: boolean;
    employeeName: string;
    grade: string;
    serviceLine: string;
    createdBy: string;
    howISeeMyRole: string;
    coreStrength1: string;
    coreStrength2: string;
    proSuccess1: string;
    proSuccess2: string;
    overallMeasure: string;
    otherInputs: string;
    projectDetails: projectDetails[];
    teamEngagement: string;
    mentoring: string;
    otherActivity: string;
    halfContri1SelfDesc: string;
    halfContri1Mgr: boolean;
    halfContri1MgrDesc: string;
    annualContri1SelfDesc: string;
    annualContri1Mgr: boolean;
    annualContri1MgrDesc: string;
    halfContri2SelfDesc: string;
    halfContri2Mgr: boolean;
    halfContri2MgrDesc: string;
    annualContri2SelfDesc: string;
    annualContri2Mgr: boolean;
    annualContri2MgrDesc: string;
    halfContri3ASelfDesc: string;
    halfContri3AMgr: boolean;
    halfContri3AMgrDesc: string;
    annualContri3ASelfDesc: string;
    annualContri3AMgr: boolean;
    annualContri3AMgrDesc: string;
    halfContri3BSelfDesc: string;
    halfContri3BMgr: boolean;
    halfContri3BMgrDesc: string;
    annualContri3BSelfDesc: string;
    annualContri3BMgr: boolean;
    annualContri3BMgrDesc: string;
    peopleContributionNA: boolean;
    tlOp: string;
    numberFreq: number;
    researchContributionNA: boolean;
    lDHrs: number;
    newSkill1: string;
    newSkill2: string;
    newSkill3: string;
    lookAheadSelfDesc: string;
    lookAheadMgr: boolean;
    lookAheadMgrDesc: string;
    manager1: {
        // leadClientInteractnDesc: string;
        // leadClientInteractnTime: string;
        halfLeadClientInteractnSelf: string;
        halfLeadClientInteractnMgr: boolean;
        halfLeadClientInteractnMgrDesc: string;
        annualLeadClientInteractnSelf: string;
        annualLeadClientInteractnMgr: boolean;
        annualLeadClientInteractnMgrDesc: string;
        // defineReportStructDesc: string;
        // defineReportStructTime: string;
        halfDefineReportStructSelf: string;
        halfDefineReportStructMgr: boolean;
        halfDefineReportStructMgrDesc: string;
        annualDefineReportStructSelf: string;
        annualDefineReportStructMgr: boolean;
        annualDefineReportStructMgrDesc: string;
        // leadPptDesc: string;
        // leadPptTime: string;
        halfLeadPptSelf: string;
        halfLeadPptMgr: boolean;
        halfLeadPptMgrDesc: string;
        annualLeadPptSelf: string;
        annualLeadPptMgr: boolean;
        annualLeadPptMgrDesc: string;
        // trackSectorActiDesc: string;
        // trackSectorActiTime: string;
        halfTrackSectorActiSelf: string;
        halfTrackSectorActiMgr: boolean;
        halfTrackSectorActiMgrDesc: string;
        annualTrackSectorActiSelf: string;
        annualTrackSectorActiMgr: boolean;
        annualTrackSectorActiMgrDesc: string;
        // createWorkProductDesc: string;
        // createWorkProductTime: string;
        halfCreateWorkProductSelf: string;
        halfCreateWorkProductMgr: boolean;
        halfCreateWorkProductMgrDesc: string;
        annualCreateWorkProductSelf: string;
        annualCreateWorkProductMgr: boolean;
        annualCreateWorkProductMgrDesc: string;
        // timelyDeliveryDesc: string;
        // timelyDeliveryTime: string;
        halfTimelyDeliverySelf: string;
        halfTimelyDeliveryMgr: boolean;
        halfTimelyDeliveryMgrDesc: string;
        annualTimelyDeliverySelf: string;
        annualTimelyDeliveryMgr: boolean;
        annualTimelyDeliveryMgrDesc: string;
    };
    manager2: {
        // leadClientIndepDesc: string,
        // leadClientIndepTime: string,
        halfLeadClientIndepSelf: string,
        halfLeadClientIndepMgr: boolean;
        halfLeadClientIndepMgrDesc: string,
        annualLeadClientIndepSelf: string,
        annualLeadClientIndepMgr: boolean;
        annualLeadClientIndepMgrDesc: string,
        // reportPreparatnDesc: string,
        // reportPreparatnTime: string,
        halfReportPreparatnSelf: string,
        halfReportPreparatnMgr: boolean;
        halfReportPreparatnMgrDesc: string,
        annualReportPreparatnSelf: string,
        annualReportPreparatnMgr: boolean;
        annualReportPreparatnMgrDesc: string,
        // identifyNewSkillDesc: string,
        // identifyNewSkillTime: string,
        halfIdentifyNewSkillSelf: string,
        halfIdentifyNewSkillMgr: boolean;
        halfIdentifyNewSkillMgrDesc: string,
        annualIdentifyNewSkillSelf: string,
        annualIdentifyNewSkillMgr: boolean;
        annualIdentifyNewSkillMgrDesc: string,
        // dAndSSectorDevlpDesc: string,
        // dAndSSectorDevlpTime: string,
        halfDAndSSectorDevlpSelf: string,
        halfDAndSSectorDevlpMgr: boolean;
        halfDAndSSectorDevlpMgrDesc: string,
        annualDAndSSectorDevlpSelf: string,
        annualDAndSSectorDevlpMgr: boolean;
        annualDAndSSectorDevlpMgrDesc: string,
        // proposalPreparnDesc: string,
        // proposalPreparnTime: string,
        halfProposalPreparnSelf: string,
        halfProposalPreparnMgr: boolean;
        halfProposalPreparnMgrDesc: string,
        annualProposalPreparnSelf: string,
        annualProposalPreparnMgr: boolean;
        annualProposalPreparnMgrDesc: string,
        // lAndDDesc: string,
        // lAndDTime: string,
        halfLAndDSelf: string,
        halfLAndDMgr: boolean;
        halfLAndDMgrDesc: string,
        annualLAndDSelf: string,
        annualLAndDMgr: boolean;
        annualLAndDMgrDesc: string,
    };
    manager3: {
        // independntReportDesc: string;
        // independntReportTime: string;
        halfIndependntReportSelf: string;
        halfIndependntReportMgr: boolean;
        halfIndependntReportMgrDesc: string;
        annualIndependntReportSelf: string;
        annualIndependntReportMgr: boolean;
        annualIndependntReportMgrDesc: string;
        // smallProjectsDesc: string;
        // smallProjectsTime: string;
        halfSmallProjectsSelf: string;
        halfSmallProjectsMgr: boolean;
        halfSmallProjectsMgrDesc: string;
        annualSmallProjectsSelf: string;
        annualSmallProjectsMgr: boolean;
        annualSmallProjectsMgrDesc: string;
        // aquireOneSkillDesc: string;
        // aquireOneSkillTime: string;
        halfAquireOneSkillSelf: string;
        halfAquireOneSkillMgr: boolean;
        halfAquireOneSkillMgrDesc: string;
        annualAquireOneSkillSelf: string;
        annualAquireOneSkillMgr: boolean;
        annualAquireOneSkillMgrDesc: string;
        // writeSectorIssueDesc: string;
        // writeSectorIssueTime: string;
        halfWriteSectorIssueSelf: string;
        halfWriteSectorIssueMgr: boolean;
        halfWriteSectorIssueMgrDesc: string;
        annualWriteSectorIssueSelf: string;
        annualWriteSectorIssueMgr: boolean;
        annualWriteSectorIssueMgrDesc: string;
        // knowledgeMgmtDesc: string;
        // knowledgeMgmtTime: string;
        halfKnowledgeMgmtSelf: string;
        halfKnowledgeMgmtMgr: boolean;
        halfKnowledgeMgmtMgrDesc: string;
        annualKnowledgeMgmtSelf: string;
        annualKnowledgeMgmtMgr: boolean;
        annualKnowledgeMgmtMgrDesc: string;
    };
    avp1: {
        // consistentManageDesc: string;
        // consistentManageTime: string;
        halfConsistentManageSelf: string;
        halfConsistentManageMgr: boolean;
        halfConsistentManageMgrDesc: string;
        annualConsistentManageSelf: string;
        annualConsistentManageMgr: boolean;
        annualConsistentManageMgrDesc: string;
        // clientRecognizeDesc: string;
        // clientRecognizeTime: string;
        halfClientRecognizeSelf: string;
        halfClientRecognizeMgr: boolean;
        halfClientRecognizeMgrDesc: string;
        annualClientRecognizeSelf: string;
        annualClientRecognizeMgr: boolean;
        annualClientRecognizeMgrDesc: string;
        // buildTeamsDesc: string;
        // buildTeamsTime: string;
        halfBuildTeamsSelf: string;
        halfBuildTeamsMgr: boolean;
        halfBuildTeamsMgrDesc: string;
        annualBuildTeamsSelf: string;
        annualBuildTeamsMgr: boolean;
        annualBuildTeamsMgrDesc: string;
        // consProductiveDesc: string;
        // consProductiveTime: string;
        halfConsProductiveSelf: string;
        halfConsProductiveMgr: boolean;
        halfConsProductiveMgrDesc: string;
        annualConsProductiveSelf: string;
        annualConsProductiveMgr: boolean;
        annualConsProductiveMgrDesc: string;
        // proposalPreparnDesc: string;
        // proposalPreparnTime: string;
        halfProposalPreparnSelf: string;
        halfProposalPreparnMgr: boolean;
        halfProposalPreparnMgrDesc: string;
        annualProposalPreparnSelf: string;
        annualProposalPreparnMgr: boolean;
        annualProposalPreparnMgrDesc: string;
        // supportReachDesc: string;
        // supportReachTime: string;
        halfSupportReachSelf: string;
        halfSupportReachMgr: boolean;
        halfSupportReachMgrDesc: string;
        annualSupportReachSelf: string;
        annualSupportReachMgr: boolean;
        annualSupportReachMgrDesc: string;
    };
    avp2: {
        // operationRespDesc: string;
        // operationRespTime: string;
        halfOperationRespSelf: string;
        halfOperationRespMgr: boolean;
        halfOperationRespMgrDesc: string;
        annualOperationRespSelf: string;
        annualOperationRespMgr: boolean;
        annualOperationRespMgrDesc: string;
        // clientPptDesc: string;
        // clientPptTime: string;
        halfClientPptSelf: string;
        halfClientPptMgr: boolean;
        halfClientPptMgrDesc: string;
        annualClientPptSelf: string;
        annualClientPptMgr: boolean;
        annualClientPptMgrDesc: string;
        // guideTeamsDesc: string;
        // guideTeamsTime: string;
        halfGuideTeamsSelf: string;
        halfGuideTeamsMgr: boolean;
        halfGuideTeamsMgrDesc: string;
        annualGuideTeamsSelf: string;
        annualGuideTeamsMgr: boolean;
        annualGuideTeamsMgrDesc: string;
        // beyondOwnProjectDesc: string;
        // beyondOwnProjectTime: string;
        halfBeyondOwnProjectSelf: string;
        halfBeyondOwnProjectMgr: boolean;
        halfBeyondOwnProjectMgrDesc: string;
        annualBeyondOwnProjectSelf: string;
        annualBeyondOwnProjectMgr: boolean;
        annualBeyondOwnProjectMgrDesc: string;
        // leadProposalDesc: string;
        // leadProposalTime: string;
        halfLeadProposalSelf: string;
        halfLeadProposalMgr: boolean;
        halfLeadProposalMgrDesc: string;
        annualLeadProposalSelf: string;
        annualLeadProposalMgr: boolean;
        annualLeadProposalMgrDesc: string;
        // contentForLDDesc: string;
        // contentForLDTime: string;
        halfContentForLDSelf: string;
        halfContentForLDMgr: boolean;
        halfContentForLDMgrDesc: string;
        annualContentForLDSelf: string;
        annualContentForLDMgr: boolean;
        annualContentForLDMgrDesc: string;
    };
    avp3: {
        // manageTwoDesc: string;
        // manageTwoTime: string;
        halfManageTwoSelf: string;
        halfManageTwoMgr: boolean;
        halfManageTwoMgrDesc: string;
        annualManageTwoSelf: string;
        annualManageTwoMgr: boolean;
        annualManageTwoMgrDesc: string;
        // deepExpertiseDesc: string;
        // deepExpertiseTime: string;
        halfDeepExpertiseSelf: string;
        halfDeepExpertiseMgr: boolean;
        halfDeepExpertiseMgrDesc: string;
        annualDeepExpertiseSelf: string;
        annualDeepExpertiseMgr: boolean;
        annualDeepExpertiseMgrDesc: string;
        // beyondOwnDesc: string;
        // beyondOwnTime: string;
        halfBeyondOwnSelf: string;
        halfBeyondOwnMgr: boolean;
        halfBeyondOwnMgrDesc: string;
        annualBeyondOwnSelf: string;
        annualBeyondOwnMgr: boolean;
        annualBeyondOwnMgrDesc: string;
        // industryEngageDesc: string;
        // industryEngageTime: string;
        halfIndustryEngageSelf: string;
        halfIndustryEngageMgr: boolean;
        halfIndustryEngageMgrDesc: string;
        annualIndustryEngageSelf: string;
        annualIndustryEngageMgr: boolean;
        annualIndustryEngageMgrDesc: string;
        // createArtefactsDesc: string;
        // createArtefactsTime: string;
        halfCreateArtefactsSelf: string;
        halfCreateArtefactsMgr: boolean;
        halfCreateArtefactsMgrDesc: string;
        annualCreateArtefactsSelf: string;
        annualCreateArtefactsMgr: boolean;
        annualCreateArtefactsMgrDesc: string;
        // lAndDDeliveryDesc: string;
        // lAndDDeliveryTime: string;
        halfLAndDDeliverySelf: string;
        halfLAndDDeliveryMgr: boolean;
        halfLAndDDeliveryMgrDesc: string;
        annualLAndDDeliverySelf: string;
        annualLAndDDeliveryMgr: boolean;
        annualLAndDDeliveryMgrDesc: string;
    };
    vp1: {
        // engagemtStrategyDesc: string;
        // engagemtStrategyTime: string;
        halfEngagemtStrategySelf: string;
        halfEngagemtStrategyMgr: boolean;
        halfEngagemtStrategyMgrDesc: string;
        annualEngagemtStrategySelf: string;
        annualEngagemtStrategyMgr: boolean;
        annualEngagemtStrategyMgrDesc: string;
        // insightsDrivenDesc: string;
        // insightsDrivenTime: string;
        halfInsightsDrivenSelf: string;
        halfInsightsDrivenMgr: boolean;
        halfInsightsDrivenMgrDesc: string;
        annualInsightsDrivenSelf: string;
        annualInsightsDrivenMgr: boolean;
        annualInsightsDrivenMgrDesc: string;
        // takeUpActivityDesc: string;
        // takeUpActivityTime: string;
        halfTakeUpActivitySelf: string;
        halfTakeUpActivityMgr: boolean;
        halfTakeUpActivityMgrDesc: string;
        annualTakeUpActivitySelf: string;
        annualTakeUpActivityMgr: boolean;
        annualTakeUpActivityMgrDesc: string;
        // thoughtLeadDesc: string;
        // thoughtLeadTime: string;
        halfThoughtLeadSelf: string;
        halfThoughtLeadMgr: boolean;
        halfThoughtLeadMgrDesc: string;
        annualThoughtLeadSelf: string;
        annualThoughtLeadMgr: boolean;
        annualThoughtLeadMgrDesc: string;
        // leadLAndDDesc: string;
        // leadLAndDTime: string;
        halfLeadLAndDSelf: string;
        halfLeadLAndDMgr: boolean;
        halfLeadLAndDMgrDesc: string;
        annualLeadLAndDSelf: string;
        annualLeadLAndDMgr: boolean;
        annualLeadLAndDMgrDesc: string;
    };
    vp2: {
        // assistMdDesc: string;
        // assistMdTime: string;
        halfAssistMdSelf: string;
        halfAssistMdMgr: boolean;
        halfAssistMdMgrDesc: string;
        annualAssistMdSelf: string;
        annualAssistMdMgr: boolean;
        annualAssistMdMgrDesc: string;
        // leadClientDDesc: string;
        // leadClientDTime: string;
        halfLeadClientDSelf: string;
        halfLeadClientDMgr: boolean;
        halfLeadClientDMgrDesc: string;
        annualLeadClientDSelf: string;
        annualLeadClientDMgr: boolean;
        annualLeadClientDMgrDesc: string;
        // peopleForFirmDesc: string;
        // peopleForFirmTime: string;
        halfPeopleForFirmSelf: string;
        halfPeopleForFirmMgr: boolean;
        halfPeopleForFirmMgrDesc: string;
        annualPeopleForFirmSelf: string;
        annualPeopleForFirmMgr: boolean;
        annualPeopleForFirmMgrDesc: string;
        // newBusinessDesc: string;
        // newBusinessTime: string;
        halfNewBusinessSelf: string;
        halfNewBusinessMgr: boolean;
        halfNewBusinessMgrDesc: string;
        annualNewBusinessSelf: string;
        annualNewBusinessMgr: boolean;
        annualNewBusinessMgrDesc: string;
        // supportCompanyDesc: string;
        // supportCompanyTime: string;
        halfSupportCompanySelf: string;
        halfSupportCompanyMgr: boolean;
        halfSupportCompanyMgrDesc: string;
        annualSupportCompanySelf: string;
        annualSupportCompanyMgr: boolean;
        annualSupportCompanyMgrDesc: string;
    };
    vp3: {
        // serviceLineDesc: string;
        // serviceLineTime: string;
        halfServiceLineSelf: string;
        halfServiceLineMgr: boolean;
        halfServiceLineMgrDesc: string;
        annualServiceLineSelf: string;
        annualServiceLineMgr: boolean;
        annualServiceLineMgrDesc: string;
        // marketRecognitnDesc: string;
        // marketRecognitnTime: string;
        halfMarketRecognitnSelf: string;
        halfMarketRecognitnMgr: boolean;
        halfMarketRecognitnMgrDesc: string;
        annualMarketRecognitnSelf: string;
        annualMarketRecognitnMgr: boolean;
        annualMarketRecognitnMgrDesc: string;
        // peopleChampionDesc: string;
        // peopleChampionTime: string;
        halfPeopleChampionSelf: string;
        halfPeopleChampionMgr: boolean;
        halfPeopleChampionMgrDesc: string;
        annualPeopleChampionSelf: string;
        annualPeopleChampionMgr: boolean;
        annualPeopleChampionMgrDesc: string;
        // hiringInventoryDesc: string;
        // hiringInventoryTime: string;
        halfHiringInventorySelf: string;
        halfHiringInventoryMgr: boolean;
        halfHiringInventoryMgrDesc: string;
        annualHiringInventorySelf: string;
        annualHiringInventoryMgr: boolean;
        annualHiringInventoryMgrDesc: string;
        // masterlyDesc: string;
        // masterlyTime: string;
        halfMasterlySelf: string;
        halfMasterlyMgr: boolean;
        halfMasterlyMgrDesc: string;
        annualMasterlySelf: string;
        annualMasterlyMgr: boolean;
        annualMasterlyMgrDesc: string;
    };
    vp4: {
        // refPointDesc: string;
        // refPointTime: string;
        halfRefPointSelf: string;
        halfRefPointMgr: boolean;
        halfRefPointMgrDesc: string;
        annualRefPointSelf: string;
        annualRefPointMgr: boolean;
        annualRefPointMgrDesc: string;
        // marketRecognDesc: string;
        // marketRecognTime: string;
        halfMarketRecognSelf: string;
        halfMarketRecognMgr: boolean;
        halfMarketRecognMgrDesc: string;
        annualMarketRecognSelf: string;
        annualMarketRecognMgr: boolean;
        annualMarketRecognMgrDesc: string;
        // speakingDesc: string;
        // speakingTime: string;
        halfSpeakingSelf: string;
        halfSpeakingMgr: boolean;
        halfSpeakingMgrDesc: string;
        annualSpeakingSelf: string;
        annualSpeakingMgr: boolean;
        annualSpeakingMgrDesc: string;
        // opinionPiecesDesc: string;
        // opinionPiecesTime: string;
        halfOpinionPiecesSelf: string;
        halfOpinionPiecesMgr: boolean;
        halfOpinionPiecesMgrDesc: string;
        annualOpinionPiecesSelf: string;
        annualOpinionPiecesMgr: boolean;
        annualOpinionPiecesMgrDesc: string;
        // pAndLDesc: string;
        // pAndLTime: string;
        halfPAndLSelf: string;
        halfPAndLMgr: boolean;
        halfPAndLMgrDesc: string;
        annualPAndLSelf: string;
        annualPAndLMgr: boolean;
        annualPAndLMgrDesc: string;
    };
    spillOver: {
        actionItem1: string;
        actionItem2: string;
        actionItem3: string;
        halfActionItemSelfDesc: string;
        halfActionItemMgr: boolean;
        halfActionItemMgrDesc: string;
        annualActionItemSelfDesc: string;
        annualActionItemMgr: boolean;
        annualActionItemMgrDesc: string;
        target1: string;
        target2: string;
        target3: string;
        halfTargetSelfDesc: string;
        halfTargetMgr: boolean;
        halfTargetMgrDesc: string;
        annualTargetSelfDesc: string;
        annualTargetMgr: boolean;
        annualTargetMgrDesc: string;
    };
    valueMatrix: {
        halfPassion1SelfEmo: string;
        halfPassion1Self: string;
        halfPassion1Mgr: boolean;
        halfPassion1MgrDesc: string;
        annualPassion1SelfEmo: string;
        annualPassion1Self: string;
        annualPassion1Mgr: boolean;
        annualPassion1MgrDesc: string;
        halfPassion2SelfEmo: string;
        halfPassion2Self: string;
        halfPassion2Mgr: boolean;
        halfPassion2MgrDesc: string;
        annualPassion2SelfEmo: string;
        annualPassion2Self: string;
        annualPassion2Mgr: boolean;
        annualPassion2MgrDesc: string;
        halfRespect1SelfEmo: string;
        halfRespect1Self: string;
        halfRespect1Mgr: boolean;
        halfRespect1MgrDesc: string;
        annualRespect1SelfEmo: string;
        annualRespect1Self: string;
        annualRespect1Mgr: boolean;
        annualRespect1MgrDesc: string;
        halfRespect2SelfEmo: string;
        halfRespect2Self: string;
        halfRespect2Mgr: boolean;
        halfRespect2MgrDesc: string;
        annualRespect2SelfEmo: string;
        annualRespect2Self: string;
        annualRespect2Mgr: boolean;
        annualRespect2MgrDesc: string;
        halfRespect3SelfEmo: string;
        halfRespect3Self: string;
        halfRespect3Mgr: boolean;
        halfRespect3MgrDesc: string;
        annualRespect3SelfEmo: string;
        annualRespect3Self: string;
        annualRespect3Mgr: boolean;
        annualRespect3MgrDesc: string;
        halfRespect4SelfEmo: string;
        halfRespect4Self: string;
        halfRespect4Mgr: boolean;
        halfRespect4MgrDesc: string;
        annualRespect4SelfEmo: string;
        annualRespect4Self: string;
        annualRespect4Mgr: boolean;
        annualRespect4MgrDesc: string;
        halfIntegrity1SelfEmo: string;
        halfIntegrity1Self: string;
        halfIntegrity1Mgr: boolean;
        halfIntegrity1MgrDesc: string;
        annualIntegrity1SelfEmo: string;
        annualIntegrity1Self: string;
        annualIntegrity1Mgr: boolean;
        annualIntegrity1MgrDesc: string;
        halfIntegrity2SelfEmo: string;
        halfIntegrity2Self: string;
        halfIntegrity2Mgr: boolean;
        halfIntegrity2MgrDesc: string;
        annualIntegrity2SelfEmo: string;
        annualIntegrity2Self: string;
        annualIntegrity2Mgr: boolean;
        annualIntegrity2MgrDesc: string;
        halfIntegrity3SelfEmo: string;
        halfIntegrity3Self: string;
        halfIntegrity3Mgr: boolean;
        halfIntegrity3MgrDesc: string;
        annualIntegrity3SelfEmo: string;
        annualIntegrity3Self: string;
        annualIntegrity3Mgr: boolean;
        annualIntegrity3MgrDesc: string;
        halfIntegrity4SelfEmo: string;
        halfIntegrity4Self: string;
        halfIntegrity4Mgr: boolean;
        halfIntegrity4MgrDesc: string;
        annualIntegrity4SelfEmo: string;
        annualIntegrity4Self: string;
        annualIntegrity4Mgr: boolean;
        annualIntegrity4MgrDesc: string;
        halfIntegrity5SelfEmo: string;
        halfIntegrity5Self: string;
        halfIntegrity5Mgr: boolean;
        halfIntegrity5MgrDesc: string;
        annualIntegrity5SelfEmo: string;
        annualIntegrity5Self: string;
        annualIntegrity5Mgr: boolean;
        annualIntegrity5MgrDesc: string;
        halfIntegrity6SelfEmo: string;
        halfIntegrity6Self: string;
        halfIntegrity6Mgr: boolean;
        halfIntegrity6MgrDesc: string;
        annualIntegrity6SelfEmo: string;
        annualIntegrity6Self: string;
        annualIntegrity6Mgr: boolean;
        annualIntegrity6MgrDesc: string;
        halfMastery1SelfEmo: string;
        halfMastery1Self: string;
        halfMastery1Mgr: boolean;
        halfMastery1MgrDesc: string;
        annualMastery1SelfEmo: string;
        annualMastery1Self: string;
        annualMastery1Mgr: boolean;
        annualMastery1MgrDesc: string;
        halfMastery2SelfEmo: string;
        halfMastery2Self: string;
        halfMastery2Mgr: boolean;
        halfMastery2MgrDesc: string;
        annualMastery2SelfEmo: string;
        annualMastery2Self: string;
        annualMastery2Mgr: boolean;
        annualMastery2MgrDesc: string;
        halfUs1SelfEmo: string;
        halfUs1Self: string;
        halfUs1Mgr: boolean;
        halfUs1MgrDesc: string;
        annualUs1SelfEmo: string;
        annualUs1Self: string;
        annualUs1Mgr: boolean;
        annualUs1MgrDesc: string;
        halfUs2SelfEmo: string;
        halfUs2Self: string;
        halfUs2Mgr: boolean;
        halfUs2MgrDesc: string;
        annualUs2SelfEmo: string;
        annualUs2Self: string;
        annualUs2Mgr: boolean;
        annualUs2MgrDesc: string;
        halfStewardship1SelfEmo: string;
        halfStewardship1Self: string;
        halfStewardship1Mgr: boolean;
        halfStewardship1MgrDesc: string;
        annualStewardship1SelfEmo: string;
        annualStewardship1Self: string;
        annualStewardship1Mgr: boolean;
        annualStewardship1MgrDesc: string;
        halfStewardship2SelfEmo: string;
        halfStewardship2Self: string;
        halfStewardship2Mgr: boolean;
        halfStewardship2MgrDesc: string;
        annualStewardship2SelfEmo: string;
        annualStewardship2Self: string;
        annualStewardship2Mgr: boolean;
        annualStewardship2MgrDesc: string;
        halfStewardship3SelfEmo: string;
        halfStewardship3Self: string;
        halfStewardship3Mgr: boolean;
        halfStewardship3MgrDesc: string;
        annualStewardship3SelfEmo: string;
        annualStewardship3Self: string;
        annualStewardship3Mgr: boolean;
        annualStewardship3MgrDesc: string;
        halfStewardship4SelfEmo: string;
        halfStewardship4Self: string;
        halfStewardship4Mgr: boolean;
        halfStewardship4MgrDesc: string;
        annualStewardship4SelfEmo: string;
        annualStewardship4Self: string;
        annualStewardship4Mgr: boolean;
        annualStewardship4MgrDesc: string;
        halfStewardship5SelfEmo: string;
        halfStewardship5Self: string;
        halfStewardship5Mgr: boolean;
        halfStewardship5MgrDesc: string;
        annualStewardship5SelfEmo: string;
        annualStewardship5Self: string;
        annualStewardship5Mgr: boolean;
        annualStewardship5MgrDesc: string;
    };
    rmComments:string;
    mdComments:string;
    updatedBy: mongoose.Types.ObjectId;
    performanceMan: mongoose.Types.ObjectId;
    reportingMan: mongoose.Types.ObjectId;
    rmName: string;
    pmName: string;
    status: string;
    halfYearlyReview: boolean;
    finalReview: boolean;
    designation: string;
    doj: Date;
}

interface projectDetails {
    category: string;
    project: string;
    projectPerformance: string;
    halfProjectSelfDesc: string;
    halfProjectMgr: boolean;
    halfProjectMgrDesc: string;
    annualProjectSelfDesc: string;
    annualProjectMgr: boolean;
    annualProjectMgrDesc: string;
}