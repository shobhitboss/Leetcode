package MappingTest;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class CreditFacilityUpdateRequest {
    public CreditFacilityDetails credit_facility_details;
    public CompanyInformation company_information;
    public CompanyDocuments company_documents;
    public CreditLimitTerms credit_limit_terms;
    public Object buyer_information;
    public ArrayList<FinancialDecisioningDocument> financial_decisioning_documents;
    public ArrayList<TermSheetDocument> term_sheet_document;
    public ArrayList<FacilityAgreement> facility_agreement;
    public ArrayList<AssignmentOfReceivablesDocument> assignment_of_receivables_documents;
    public ArrayList<Object> supplier_agreement_documents;
    public ArrayList<RemarkDocument> remark_document;
    public ArrayList<Object> internal_remark_document;
    public Exception exception;
    public ArrayList<Object> internal_comments;
    public ArrayList<ClientRemark> client_remarks;
    public ApplicantBankDetails applicant_bank_details;
    public ExposureDetails exposureDetails;
    public Status status;
    public ArrayList<Object> buyer_verification;
    public ArrayList<History> history;
    public InternalLendingInfo internal_lending_info;
    public ChargesException chargesException;
    public boolean is_large_exposure;
    public InsuranceDetails insuranceDetails;

    public static class AllKycQuestionList {
        public int id;
        public String questionCode;
        public String question;
        public Tenant tenant;
        public StatusCode statusCode;
        public ArrayList<QuestionAttributeDetail> questionAttributeDetails;
    }

    public static class ApplicantBankDetails {
    }

    public static class ApplicantDetails {
        public ContactDetails contact_details;
        public IncorporationAddress incorporation_address;
        public CompanyKycDetail company_kyc_detail;
    }

    public static class ApprovedTerms {
        public ArrayList<String> supported_currencies;
        public ArrayList<String> fi_applicant_product_intersection;
        public ArrayList<String> products_combination;
        public ArrayList<String> approved_sectors;
        public String currency;
        public String credit_limit;
        public String usable_credit_limit;
        public String board_sanctioned_credit_limit;
        public int invoiceStalePeriod;
        public int max_financing_tenure;
        public String max_finance_tenure_from;
        public int allowed_days_for_disbursal_from_bl_date;
        public String borrower_credit_risk_score;
        public String max_advance_rate;
        public ArrayList<DiscountRate> discount_rate;
        public Object overdue_rate;
        public String processing_fee;
        public Object additional_fees;
        public Object seasonal_discount_rate;
        public Object overdue_rate_type;
        public String processing_fee_charge_type;
        public Object is_seasonal_discount_rate_applied;
        public String discount_rate_type;
        public String annual_processing_fee_type;
        public String annual_processing_fee;
        public Object margin_discount_rate;
        public String fixed_floating_rate_type;
        public Object processing_fee_percentage_type;
        public String tenure_type;
        public String counter_party_acceptance;
        public Date bccApprovalDate;
        public Date bccReviewDate;
        public Object agreementSignDate;
        public Date agreementExpiryDate;
        public Object extended_expiry_date;
    }

    public static class AssignmentOfReceivablesDocument {
        public int id;
        public String document_name;
        public String document_type;
        public int owner_id;
        public String owner_type;
        public String uploaded_by;
        public Object enable_docusign;
        public Date created_at;
        public Object updated_at;
    }

//    public static class BuyerInformation {
//        @JsonProperty("TRADE_FINANCE_REVERSE_FACTORING")
//        public ArrayList<TRADEFINANCEREVERSEFACTORING> tRADE_FINANCE_REVERSE_FACTORING;
//        @JsonProperty("LOGISTICS_FINANCE_REVERSE_FACTORING")
//        public ArrayList<LOGISTICSFINANCEREVERSEFACTORING> lOGISTICS_FINANCE_REVERSE_FACTORING;
//    }

    public static class ChargesException {
        public ArrayList<Object> productLevelChargesException;
        public ArrayList<Object> counterPartyProductLevelChargesException;
    }

    public static class ClientRemark {
        public String id;
        public String user_id;
        public String user_name;
        public String message;
        public String remark_identification_id;
        public String remark_type;
        public String remark_category;
        public String document_upload_id;
        public Date created_at;
        public Object updated_at;
        public Object deleted_at;
        public String remark_sub_category;
        public Object source_reference_id;
        public String user_organisation_name;
        public ArrayList<DocumentDetail> documentDetails;
    }

    public static class CompanyAdditionalInfoMapperDetail {
        public StatusCode statusCode;
        public String createdBy;
        public Date createdDate;
        public String lastModifiedBy;
        public Date lastModifiedDate;
        public int id;
        public int companyAdditionalInfoMapperRequestId;
        public int companyAdditionalInfoId;
        public int companyAdditionalInfoRequestId;
        public String answer;
    }

    public static class CompanyDocuments {
        public DocumentsForFacility documents_for_facility;
        public ArrayList<OtherDocument> other_documents;
    }

    public static class CompanyInformation {
        public KycDetail kyc_details;
        public ArrayList<EligibilityDetail> eligibility_details;
    }

    public static class CompanyKycDetail {
        public ArrayList<String> commodity_types;
        public ArrayList<Object> business_address;
        public ArrayList<Date> incorporation_date;
        public ArrayList<String> countries_of_origin;
        public ArrayList<String> countries_of_destination;
        public ArrayList<String> business_sectors;
        public ArrayList<String> website_detail;
        public Object iec_code;
    }

    public static class ContactDetails {
        public String company_name;
        public String company_email_id;
        public String company_contact_number;
        public String company_contact_number_country_code;
    }

    public static class CreditFacilityDetails {
        public int applicant_id;
        public String applicant_company_name;
        public String applicant_mawani_ref_id;
        public boolean max_finance_tenure_from_enabled;
        public int lending_credit_facility_id;
        public int credit_facility_id;
        public int fi_id;
        public String fi_org_name;
        public ApplicantDetails applicant_details;
        public Object annual_processing_fee_update_date;
        public Date created_at;
        public boolean restrict_disbursal_IF;
        public boolean restrict_disbursal_RF;
        public boolean restrict_disbursal_ID;
        public boolean restrict_disbursal_TP;
        public ArrayList<String> client_incorporation_countries_ID;
        public ArrayList<String> client_incorporation_countries_IF;
        public ArrayList<String> counter_party_incorporation_countries_IF;
        public ArrayList<String> client_incorporation_countries_IFWOR;
        public ArrayList<String> counter_party_incorporation_countries_IFWOR;
        public ArrayList<String> client_incorporation_countries_RF;
        public ArrayList<String> client_incorporation_countries_TP;
        public ArrayList<String> client_incorporation_countries_IVFB;
        public ArrayList<String> client_incorporation_countries_IVFS;
        public ArrayList<String> client_incorporation_countries_RCF;
    }

    public static class CreditLimitTerms {
        public RequestedTerms requested_terms;
        public ApprovedTerms approved_terms;
    }

    public static class CreditLimitTransaction {
        public int owner_id;
        public String owner_type;
        public String user_id;
        public String action;
        public String state;
        public String notes;
        public Date created_at;
        public Object updated_at;
        public Object deleted_at;
        public String workflow;
        public int organisation_id;
        public String user_organisation_name;
        public String user_name;
    }

    public static class DiscountRate {
        public String tenure_discount_rate;
        public int days;
    }

    public static class DocumentDetail {
        public int id;
        public int ownerId;
        public String ownerType;
        public String document_name;
        public String document_type;
        public String document_location;
        public Object owner_id;
        public Object owner_type;
        public String uploaded_by;
        public String document_upload_id;
        public Date created_at;
        public Object updated_at;
        public Object deleted_at;
        public Object enable_docusign;
        public boolean is_file_publish_to_arranging;
        public Object source_reference_id;
    }

    public static class DocumentsForFacility {
        public ArrayList<String> required_documents;
        public ArrayList<Object> uploaded_documents;
    }

    public static class EligibilityDetail {
        public String question_text;
        public ArrayList<String> responses;
    }

    public static class Exception {
        public ArrayList<StandardSecurity> standard_securities;
        public ArrayList<StandardPostLimit> standard_post_limit;
        public String standard_pre_imit;
    }

    public static class ExposureDetails {
        public ArrayList<Object> approvedExposures;
        public ArrayList<Object> underReviewExposures;
    }

    public static class FacilityAgreement {
        public int id;
        public String document_name;
        public String document_type;
        public int owner_id;
        public String owner_type;
        public String uploaded_by;
        public Object enable_docusign;
        public Date created_at;
        public Object updated_at;
    }

    public static class FinancialDecisioningDocument {
        public int id;
        public String document_name;
        public String document_type;
        public int owner_id;
        public String owner_type;
        public String uploaded_by;
        public Object enable_docusign;
        public Date created_at;
        public Object updated_at;
    }

    public static class History {
        public int id;
        public String actor;
        public String action;
        public String category;
        public int category_id;
        public String data;
        public String user_full_name;
        public Date created_at;
    }

    public static class IncorporationAddress {
        public String country;
        public String state;
        public String city;
        public String pinCode;
        public String address;
    }

    public static class InsuranceDetails {
        public int insuranceId;
        public String policyNumber;
        public String insurerName;
        public Date policyStartDate;
        public Date policyEndDate;
        public String policyStatus;
        public String flagText;
        public ArrayList<Object> counterPartyInsuranceList;
    }

    public static class InternalLendingInfo {
        public UserRolesInfo user_roles_info;
        public LoanDocuments loan_documents;
        public ArrayList<CreditLimitTransaction> credit_limit_transactions;
        public Object commercial_registration_number;
        public Object licence_number;
        public String active_user;
        public String active_workflow;
    }

    public static class KycDetail {
        public StatusCode statusCode;
        public String createdBy;
        public Date createdDate;
        public String lastModifiedBy;
        public Date lastModifiedDate;
        public int id;
        public int companyId;
        public int companyRequestId;
        public int companyAdditionalInfoId;
        public int companyAdditionalInfoRequestId;
        public String clientTypeCode;
        public Object serviceProviderCode;
        public Object countryCode;
        public String questionCode;
        public ArrayList<CompanyAdditionalInfoMapperDetail> companyAdditionalInfoMapperDetails;
        public ArrayList<AllKycQuestionList> all_kyc_question_list;
        public ArrayList<KycDetail> kyc_details;
    }

    public static class LoanDocuments {
        public ArrayList<SupplierAgreement> supplier_agreement;
        public ArrayList<TermSheetDocument> term_sheet_document;
    }

    public static class LOGISTICSFINANCEREVERSEFACTORING {
        public String finance_type;
        public int buyer_id;
        public String company_name;
        public String country;
        public String status;
        public String limit;
        public Object usable_limit;
        public Object updated_limit;
        public boolean is_existing_cp;
        public String paymentTerms;
        public String businessVintage;
        public String percentageSalesPurchases;
        public boolean relatedParty;
        public String commodity;
        public ArrayList<Object> remarks;
        public ArrayList<Object> internalComments;
        public int sourceReferenceId;
    }

    public static class OtherDocument {
        public String document_type;
        public String document_number;
        public String document_reference;
        public String document_name;
        public String document_category;
        public String facility_state_during_doc_upload;
        public String document_type_description;
    }

    public static class QuestionAttributeDetail {
        public int id;
        public String code;
        public String value;
        public String defaultValue;
        public int sequence;
    }

    public static class RemarkDocument {
        public int id;
        public String document_name;
        public String document_type;
        public int owner_id;
        public String owner_type;
        public String uploaded_by;
        public Object enable_docusign;
        public Date created_at;
        public Object updated_at;
    }

    public static class RequestedTerms {
        public ArrayList<String> products;
        public ArrayList<String> finance_type;
        public String currency;
        public String expected_credit_limit;
        public String expected_credit_period;
        public Object requested_products_combination;
        public Object requested_sectors;
    }


    public static class SectionAllowedInfo {
        public String companyDetails;
        public String companyDocuments;
        public String creditLimitTerms;
        public String buyerSupplierInformation;
        public String finDecisioningDocs;
        public String termSheetDocument;
        public String creditExceptions;
        public String facilityAgreeements;
        public String assignmentOfReceivables;
        public String supplierAgreement;
        public String remarks;
        public String internalComments;
        public String status;
        public String historyInformation;
        public String insuranceTerms;
        public String creditChargesException;
        public String exposureControl;
    }

    public static class SelectedDoc {
        public String docName;
        public String docDescription;
    }

    public static class StandardPostLimit {
        public String product;
        public ArrayList<SelectedDoc> selectedDocs;
    }

    public static class StandardSecurity {
        public String name;
    }

    public static class Status {
        public String current_status;
        public ArrayList<String> status_update_to;
    }

    public static class StatusCode {
        public String name;
        public String description;
    }

    public static class SupplierAgreement {
        public String loan_document_name;
        public int document_id;
        public int loan_document_id;
        public Object products;
    }

    public static class Tenant {
        public String name;
        public Object description;
    }

    public static class TermSheetDocument {
        public int id;
        public String document_name;
        public String document_type;
        public int owner_id;
        public String owner_type;
        public String uploaded_by;
        public Object enable_docusign;
        public Date created_at;
        public Object updated_at;
        public String loan_document_name;
        public int document_id;
        public int loan_document_id;
        public Object products;
    }

    public static class TRADEFINANCEREVERSEFACTORING {
        public String finance_type;
        public int buyer_id;
        public String company_name;
        public String country;
        public String status;
        public String limit;
        public Object usable_limit;
        public Object updated_limit;
        public boolean is_existing_cp;
        public String paymentTerms;
        public String businessVintage;
        public String percentageSalesPurchases;
        public boolean relatedParty;
        public String commodity;
        public ArrayList<Object> remarks;
        public ArrayList<Object> internalComments;
        public int sourceReferenceId;
    }

    public static class UserRolesInfo {
        public SectionAllowedInfo sectionAllowedInfo;
        public ArrayList<String> actionAllowedInfo;
    }
}
