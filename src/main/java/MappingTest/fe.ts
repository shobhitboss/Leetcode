import { Injectable } from '@angular/core';


interface FieldData {
  isVisible: boolean;
  isEditable?: boolean;
  isMandatory?: boolean;
  fieldType?: string;
  fieldData?: {};
  label?: string;
  conditions?: {
    [conditionKey: string]: {
      fieldData?: {
        [fieldKey: string]: FieldData;
      }
      comparison?: string;
      comparisonSymbol?: string;
      fieldsAppliedTo?: string[];
    };
  };
}

interface SectionConfig {
  isVisible: boolean;
  isEditable?: boolean;
  isMandatory?: boolean;
  fieldType?: string;
  fieldData?: {
    [fieldKey: string]: ProductConfig | FieldData;
  };
  label?: string;
}

export interface ProductConfig {
  [productCategory: string]: {
    [productType: string]: {
      [sectionKey: string]: SectionConfig;
    };
  };
}

export interface CreditFacilityConfig {
  [productType: string]: {
    commonConfig: {
      isBuyer: boolean,
      isSeller: boolean
      allProductTypeCategoryFinanceCombos: string[],
      isCategoryEnabled: boolean
    },
    applyConfig: {
      captureLimitRequired: boolean, //boolean
      restrictDisbursalKeyName: string, //restrict_disbursal_ + shortFormOfProductType
      assignmentOfReceivablesApplicable: boolean, //boolean
      counterPartyAcceptanceRequired: boolean //boolean
    },
    counterPartyComponentsConfig: {
      counterPartyFormType: string, //compact / full
    },
    approveConfig: {
      captureLimitRequired: boolean,
      restrictDisbursalKeyName: string,
      termsheetRequired: boolean,
      assignmentOfReceivablesApplicable: boolean,
      allowCPDeletion: boolean,
      supplierAgreement: boolean
    },
    creditLimitTermsConfig: {
      minCreditPeriodVisible: boolean,
      maxFinancingTenureOptionsProductCategoryList: string[],
      importerAcceptanceValidatorRequired: boolean
    }
  };
}

export enum ProductCategory {
  Trade,
  Logistics
}

export enum ProductType {
  invoiceDiscounting,
  invoiceFactoring,
  reverseFactoring,
  tradePayablesFinancing,
  invoiceFactoringWoRecourse,
  inventoryFinanceBuyer,
  inventoryFinanceSeller,
  revolvingCreditFacility
}

export interface FinanceTypeInterface {
  value: string;
  viewValue: string;
}

export interface FinanceTypeInfoInterface {
  productType: FinanceTypeInterface;
  financeType?: FinanceTypeInterface;
  productCategory?: FinanceTypeInterface;
}

export interface MawaniAllowedFinTypes {
  logistics_finance_invoice_discounting: boolean;
  logistics_finance_invoice_factoring: boolean;
  logistics_finance_invoice_factoring_wo_recourse: boolean;
  logistics_finance_reverse_factoring: boolean;
  logistics_finance_trade_payables_financing: boolean;
  trade_finance_invoice_discounting: boolean;
  trade_finance_invoice_factoring: boolean;
  trade_finance_invoice_factoring_wo_recourse: boolean;
  trade_finance_inventory_finance_buyer: boolean;
  trade_finance_inventory_finance_seller: boolean;
  trade_finance_revolving_credit_facility: boolean;
  trade_finance_reverse_factoring: boolean;
  trade_finance_trade_payables_financing: boolean;
  supply_chain_financing: boolean;
}

export class Finances {

  public static productType = [
    { value: '1', viewValue: 'Invoice Discounting' },
    { value: '2', viewValue: 'Invoice Factoring' },
    { value: '3', viewValue: 'Reverse Factoring' },
    { value: '4', viewValue: 'Trade Payables Financing' },
    { value: '5', viewValue: 'Invoice Factoring W/O Recourse' },
    { value: '6', viewValue: 'Inventory Finance Buyer' },
    { value: '7', viewValue: 'Inventory Finance Seller' },
    { value: '8', viewValue: 'Revolving Credit Facility' }
  ];

  public static productCategory = [
    { value: '1', viewValue: 'Trade Finance' },
    { value: '2', viewValue: 'Logistics Finance' }
  ];

  public static financeType = [
    { value: '1', viewValue: 'DEFERRED' },
    { value: '2', viewValue: 'IN_TRANSIT' }
  ];

  public static financeProductType = [
    { value: '1', viewValue: 'Trade Finance' },
    { value: '2', viewValue: 'Logistics Finance' }
  ]
}

export enum LOGISTICS_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_DISCOUNTING',
  financeType = 'IN_TRANSIT'
}
export enum LOGISTICS_FINANCE_INVOICE_DISCOUNTING_DEFERRED {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_DISCOUNTING',
  financeType = 'DEFERRED'
}
export enum LOGISTICS_FINANCE_INVOICE_FACTORING_IN_TRANSIT {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_FACTORING',
  financeType = 'IN_TRANSIT'
}
export enum LOGISTICS_FINANCE_INVOICE_FACTORING_DEFERRED {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_FACTORING',
  financeType = 'DEFERRED'
}
export enum LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_FACTORING_WO_RECOURSE',
  financeType = 'IN_TRANSIT'
}
export enum LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'INVOICE_FACTORING_WO_RECOURSE',
  financeType = 'DEFERRED'
}
export enum LOGISTICS_FINANCE_REVERSE_FACTORING_IN_TRANSIT {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'REVERSE_FACTORING',
  financeType = 'IN_TRANSIT'
}
export enum LOGISTICS_FINANCE_REVERSE_FACTORING_DEFERRED {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'REVERSE_FACTORING',
  financeType = 'DEFERRED'
}
export enum LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'TRADE_PAYABLES_FINANCING',
  financeType = 'IN_TRANSIT'
}
export enum LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED {
  productCategory = 'LOGISTICS_FINANCE',
  productType = 'TRADE_PAYABLES_FINANCING',
  financeType = 'DEFERRED'
}
export enum TRADE_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_DISCOUNTING',
  financeType = 'IN_TRANSIT'
}
export enum TRADE_FINANCE_INVOICE_DISCOUNTING_DEFERRED {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_DISCOUNTING',
  financeType = 'DEFERRED'
}
export enum TRADE_FINANCE_INVOICE_FACTORING_IN_TRANSIT {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_FACTORING',
  financeType = 'IN_TRANSIT'
}
export enum TRADE_FINANCE_INVOICE_FACTORING_DEFERRED {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_FACTORING',
  financeType = 'DEFERRED'
}
export enum TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_FACTORING_WO_RECOURSE',
  financeType = 'IN_TRANSIT'
}
export enum TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVOICE_FACTORING_WO_RECOURSE',
  financeType = 'DEFERRED'
}
export enum TRADE_FINANCE_REVERSE_FACTORING_IN_TRANSIT {
  productCategory = 'TRADE_FINANCE',
  productType = 'REVERSE_FACTORING',
  financeType = 'IN_TRANSIT'
}
export enum TRADE_FINANCE_REVERSE_FACTORING_DEFERRED {
  productCategory = 'TRADE_FINANCE',
  productType = 'REVERSE_FACTORING',
  financeType = 'DEFERRED'
}
export enum TRADE_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT {
  productCategory = 'TRADE_FINANCE',
  productType = 'TRADE_PAYABLES_FINANCING',
  financeType = 'IN_TRANSIT'
}
export enum TRADE_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED {
  productCategory = 'TRADE_FINANCE',
  productType = 'TRADE_PAYABLES_FINANCING',
  financeType = 'DEFERRED'
}

export enum TRADE_FINANCE_INVENTORY_FINANCE_BUYER_DEFFERED {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVENTORY_FINANCE_BUYER',
  financeType = 'DEFERRED'
}

export enum TRADE_FINANCE_INVENTORY_FINANCE_SELLER_DEFFERED {
  productCategory = 'TRADE_FINANCE',
  productType = 'INVENTORY_FINANCE_SELLER',
  financeType = 'DEFERRED'
}

export enum TRADE_FINANCE_REVOLVING_CREDIT_FACILITY_DEFFERED {
  productCategory = 'TRADE_FINANCE',
  productType = 'REVOLVING_CREDIT_FACILITY',
  financeType = 'DEFERRED'
}

export const counterPartyFormTypeENUM = {
  FULL: 'full',
  COMPACT: 'compact',
  NOT_APPLICABLE: 'na'
}

export const PRODUCT_LIST = {
  LOGISTICS_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT: LOGISTICS_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT,
  LOGISTICS_FINANCE_INVOICE_DISCOUNTING_DEFERRED: LOGISTICS_FINANCE_INVOICE_DISCOUNTING_DEFERRED,
  LOGISTICS_FINANCE_INVOICE_FACTORING_IN_TRANSIT: LOGISTICS_FINANCE_INVOICE_FACTORING_IN_TRANSIT,
  LOGISTICS_FINANCE_INVOICE_FACTORING_DEFERRED: LOGISTICS_FINANCE_INVOICE_FACTORING_DEFERRED,
  LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT: LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT,
  LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED: LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED,
  LOGISTICS_FINANCE_REVERSE_FACTORING_IN_TRANSIT: LOGISTICS_FINANCE_REVERSE_FACTORING_IN_TRANSIT,
  LOGISTICS_FINANCE_REVERSE_FACTORING_DEFERRED: LOGISTICS_FINANCE_REVERSE_FACTORING_DEFERRED,
  LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT: LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT,
  LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED: LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED,
  TRADE_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT: TRADE_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT,
  TRADE_FINANCE_INVOICE_DISCOUNTING_DEFERRED: TRADE_FINANCE_INVOICE_DISCOUNTING_DEFERRED,
  TRADE_FINANCE_INVOICE_FACTORING_IN_TRANSIT: TRADE_FINANCE_INVOICE_FACTORING_IN_TRANSIT,
  TRADE_FINANCE_INVOICE_FACTORING_DEFERRED: TRADE_FINANCE_INVOICE_FACTORING_DEFERRED,
  TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT: TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT,
  TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED: TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED,
  TRADE_FINANCE_INVENTORY_FINANCE_BUYER_DEFFERED: TRADE_FINANCE_INVENTORY_FINANCE_BUYER_DEFFERED,
  TRADE_FINANCE_INVENTORY_FINANCE_SELLER_DEFFERED: TRADE_FINANCE_INVENTORY_FINANCE_SELLER_DEFFERED,
  TRADE_FINANCE_REVOLVING_CREDIT_FACILITY_DEFFERED: TRADE_FINANCE_REVOLVING_CREDIT_FACILITY_DEFFERED,
  TRADE_FINANCE_REVERSE_FACTORING_IN_TRANSIT: TRADE_FINANCE_REVERSE_FACTORING_IN_TRANSIT,
  TRADE_FINANCE_REVERSE_FACTORING_DEFERRED: TRADE_FINANCE_REVERSE_FACTORING_DEFERRED,
  TRADE_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT: TRADE_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT,
  TRADE_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED: TRADE_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED,
}

@Injectable({
  providedIn: 'root'
})
export class ProductConfigService {

  constructor() { }

  financingType = [
    { value: 'DEFERRED', viewValue: 'Deferred' },
    { value: 'IN_TRANSIT', viewValue: 'In-transit' }
  ];

  defaultProductType = ProductType.invoiceDiscounting;
  defaultProductCategory = ProductCategory.Trade;

  productOnboardingConfig = {
    products: [
      { apiKey: 'TRADE_FINANCE_INVOICE_DISCOUNTING', viewValue: 'Trade Finance: Invoice Discounting' },
      { apiKey: 'TRADE_FINANCE_INVOICE_FACTORING', viewValue: 'Trade Finance: Invoice Factoring' },
      { apiKey: 'TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE', viewValue: 'Trade Finance: Invoice Factoring W/O Recourse' },
      { apiKey: 'TRADE_FINANCE_INVENTORY_FINANCE_BUYER', viewValue: 'Inventory Finance - Buyer' },
      { apiKey: 'TRADE_FINANCE_INVENTORY_FINANCE_SELLER', viewValue: 'Inventory Finance - Seller' },
      { apiKey: 'TRADE_FINANCE_REVERSE_FACTORING', viewValue: 'Trade Finance: Reverse Factoring' },
      { apiKey: 'TRADE_FINANCE_REVOLVING_CREDIT_FACILITY', viewValue: 'Revolving Credit Facility' },
      { apiKey: 'TRADE_FINANCE_TRADE_PAYABLES_FINANCING', viewValue: 'Trade Finance: Trade Payables Financing' },
      { apiKey: 'LOGISTICS_FINANCE_INVOICE_DISCOUNTING', viewValue: 'Logistics Finance: Invoice Discounting' },
      { apiKey: 'LOGISTICS_FINANCE_INVOICE_FACTORING', viewValue: 'Logistics Finance: Invoice Factoring' },
      { apiKey: 'LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE', viewValue: 'Logistics Finance: Invoice Factoring W/O Recourse' },
      { apiKey: 'LOGISTICS_FINANCE_REVERSE_FACTORING', viewValue: 'Logistics Finance: Reverse Factoring' },
      { apiKey: 'LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING', viewValue: 'Logistics Finance: Trade Payables Financing' },
      { apiKey: 'SUPPLY_CHAIN_FINANCING', viewValue: 'Supply Chain Financing' },
    ],
    restrictDisbursementFormControl: [
      {
        control: 'restrictDisbursalInvoiceDiscounting',
        value: false,
        label: 'Restrict invoice discounting disbursement for approved buyer list in facility',
        apiKey: 'restrict_disbursal_ID'
      },
      {
        control: 'restrictDisbursalReverseFactoring',
        value: false,
        label: 'Restrict reverse factoring disbursement for approved seller list in facility',
        apiKey: 'restrict_disbursal_RF'
      },
      {
        control: 'restrictDisbursalTradePayables',
        value: false,
        label: 'Restrict trade payables financing disbursement for approved seller list in facility',
        apiKey: 'restrict_disbursal_TP'
      },
      {
        control: 'restrictDisbursalInventoryFinanceBuyer',
        value: false,
        label: 'Restrict inventory finance buyer disbursement for approved buyer list in facility',
        apiKey: 'restrict_disbursal_IVFB'
      },
      {
        control: 'restrictDisbursalInventoryFinanceSeller',
        value: false,
        label: 'Restrict inventory finance seller disbursement for approved buyer list in facility',
        apiKey: 'restrict_disbursal_IVFS'
      },
      {
        control: 'restrictDisbursalRevolvingCreditFacility',
        value: false,
        label: 'Restrict revolving credit facility disbursement for approved buyer list in facility',
        apiKey: 'restrict_disbursal_RCF'
      },
    ],
    incorporationCountryControls: [
      {
        productType: 'INVOICE_DISCOUNTING',
        control: 'clientIncCountryID',
        apiKey: 'client_incorporation_countries_ID',
        value: false,
        label: 'Client Incorporation Countries - Invoice Discounting',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'INVOICE_FACTORING',
        control: 'clientIncCountryIF',
        apiKey: 'client_incorporation_countries_IF',
        value: false,
        label: 'Client Incorporation Countries - Invoice Factoring',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'INVOICE_FACTORING',
        control: 'importerIncCountryIF',
        apiKey: 'counter_party_incorporation_countries_IF',
        value: false,
        label: 'Importer (Counter Party) Incorporation Countries - Invoice Factoring',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Buyer/Importer Country',
        enableAllSelection: 'Countries'
      },
      {
        productType: 'INVOICE_FACTORING_WO_RECOURSE',
        control: 'clientIncCountryIFWOR',
        apiKey: 'client_incorporation_countries_IFWOR',
        value: false,
        label: 'Client Incorporation Countries - Invoice Factoring W/O Recourse',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'INVOICE_FACTORING_WO_RECOURSE',
        control: 'importerIncCountryIFWOR',
        apiKey: 'counter_party_incorporation_countries_IFWOR',
        value: false,
        label: 'Importer (Counter Party) Incorporation Countries - Invoice Factoring W/O Recourse',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Buyer/Importer Country',
        enableAllSelection: 'Countries'
      },
      {
        productType: 'REVERSE_FACTORING',
        control: 'clientIncCountryRF',
        apiKey: 'client_incorporation_countries_RF',
        value: false,
        label: 'Client Incorporation Countries - Reverse Factoring',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Buyer/Importer Country',
        enableAllSelection: ''
      },
      {
        productType: 'TRADE_PAYABLES_FINANCING',
        control: 'clientIncCountryTPF',
        apiKey: 'client_incorporation_countries_TP',
        value: false,
        label: 'Client Incorporation Countries - Trade Payables Financing',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Buyer/Importer Country',
        enableAllSelection: ''
      },
      {
        productType: 'INVENTORY_FINANCE_BUYER',
        control: 'clientIncCountryIVFB',
        apiKey: 'client_incorporation_countries_IVFB',
        value: false,
        label: 'Client Incorporation Countries - Inventory Finance - Buyer',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'INVENTORY_FINANCE_SELLER',
        control: 'clientIncCountryIVFS',
        apiKey: 'client_incorporation_countries_IVFS',
        value: false,
        label: 'Client Incorporation Countries - Inventory Finance - Seller',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'REVOLVING_CREDIT_FACILITY',
        control: 'clientIncCountryRCF',
        apiKey: 'client_incorporation_countries_RCF',
        value: false,
        label: 'Client Incorporation Revolving Credit Facility',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Seller/Exporter Country',
        enableAllSelection: ''
      },
      {
        productType: 'SUPPLY_CHAIN_FINANCING',
        control: 'clientIncCountrySCF',
        apiKey: 'client_incorporation_countries_SCF',
        value: false,
        label: 'Client Incorporation Countries - Supply Chain Financing',
        selectedCountries: [],
        sourceCountries: [],
        fieldVisibility: false,
        tooltip: 'Buyer/Importer Country',
        enableAllSelection: ''
      }
    ]
  }

  productCategories = ['trade', 'logistics'];

  defaultDisplaySelectedFinance: string = 'Logistics Finance: Invoice Discounting';
  defaultSelectedFinance: FinanceTypeInfoInterface = {
    productCategory: {
      value: '2',
      viewValue: 'Logistics Finance'
    },
    productType: {
      value: '1',
      viewValue: 'Invoice Discounting'
    }
  };

  conditionMapConfig = {
    productCategory: {
      TRADE_FINANCE: {
        label: 'TRADE FINANCE',
        firstName: 'TRADE',
        definition: 'Pre & Post-shipment financing for your imports & exports',
        buyerImporterLabel: 'Importer',
        sellerExporterLabel: 'Exporter'
      },
      LOGISTICS_FINANCE: {
        label: 'LOGISTICS FINANCE',
        firstName: 'LOGISTICS',
        definition: 'Receivables and Payables financing for sales and purchase of logistics services',
        buyerImporterLabel: 'Buyer',
        sellerExporterLabel: 'Seller'
      }
    },
    productType: {
      INVOICE_DISCOUNTING: 'INVOICE DISCOUNTING',
      INVOICE_FACTORING: 'INVOICE FACTORING',
      REVERSE_FACTORING: 'REVERSE FACTORING',
      TRADE_PAYABLES_FINANCING: 'TRADE PAYABLES FINANCING',
      INVOICE_FACTORING_WO_RECOURSE: 'INVOICE FACTORING W/O RECOURSE',
      INVENTORY_FINANCE_BUYER: 'INVENTORY FINANCE BUYER',
      INVENTORY_FINANCE_SELLER: 'INVENTORY FINANCE SELLER',
      REVOLVING_CREDIT_FACILITY: 'REVOLVING CREDIT FACILITY'
    },
    financingType: {
      DEFERRED: 'DEFERRED',
      IN_TRANSIT: 'IN-TRANSIT'
    }
  };

  userRoleFinTypeDesciption = {
    logistics_finance_invoice_discounting: ['LF_INVDISC_AMEND', 'LF_INVDISC_VW'],
    logistics_finance_invoice_factoring: ['LF_INVFAC_AMEND', 'LF_INVFAC_VW'],
    logistics_finance_reverse_factoring: ['LF_REVFAC_AMEND', 'LF_REVFAC_VW'],
    logistics_finance_trade_payables_financing: ['LF_TRDPAYFIN_AMEND', 'LF_TRDPAYFIN_VW'],
    logistics_finance_invoice_factoring_wo_recourse: ['LF_INVFACWOREC_AMEND', 'LF_INVFACWOREC_VW'],
    trade_finance_invoice_discounting: ['TF_INVDISC_AMEND', 'TF_INVDISC_VW'],
    trade_finance_invoice_factoring: ['TF_INVFAC_AMEND', 'TF_INVFAC_VW'],
    trade_finance_reverse_factoring: ['TF_REVFAC_AMEND', 'TF_REVFAC_VW'],
    trade_finance_trade_payables_financing: ['TF_TRDPAYFIN_AMEND', 'TF_TRDPAYFIN_VW'],
    trade_finance_invoice_factoring_wo_recourse: ['TF_INVFACWOREC_AMEND', 'TF_INVFACWOREC_VW'],
    supply_chain_financing: ['SCF_AMEND', 'SCF_VIEW'],
    trade_finance_inventory_finance_buyer: ['INV_FIN_AMEND', 'INV_FIN_VW'],
    trade_finance_inventory_finance_seller: ['INV_FIN_AMEND', 'INV_FIN_VW'],
    trade_finance_revolving_credit_facility: ['RCF_AMEND', 'RCF_VW']
  };

  allFinances = [
    { value: '2', viewValue: 'Trade Finance: Invoice Factoring' },
    { value: '1', viewValue: 'Trade Finance: Invoice Discounting' },
    { value: '3', viewValue: 'Trade Finance: Reverse Factoring' },
    { value: '4', viewValue: 'Trade Finance: Trade Payables Financing' },
    { value: '5', viewValue: 'Trade Finance: Invoice Factoring W/O Recourse' },
    { value: '6', viewValue: 'Inventory Finance Buyer' },
    { value: '7', viewValue: 'Inventory Finance Seller' },
    { value: '8', viewValue: 'Revolving Credit Facility' },
    { value: '2', viewValue: 'Logistics Finance: Invoice Factoring' },
    { value: '1', viewValue: 'Logistics Finance: Invoice Discounting' },
    { value: '3', viewValue: 'Logistics Finance: Reverse Factoring' },
    { value: '4', viewValue: 'Logistics Finance: Trade Payables Financing' },
    { value: '5', viewValue: 'Logistics Finance: Invoice Factoring W/O Recourse' },
  ];

  productFinanceTypeDescription = {
    TF_IF: `Invoice Factoring is a type of short-term accounts receivable financing, where you
    effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant
    (exporter) gets the cash from the financial institution based on the commercial terms agreed and the trading
    partner (importer)
    pays back to the financial institution on the due date.`,
    TF_ID: `Invoice Discounting is a form of short-term borrowing against your outstanding invoices.
    The applicant (exporter) gets the cash from the financial institution based on the commercial terms agreed
    and the applicant (exporter) pays back to the financial institution on the due date.`,
    TF_RF: `The finance can be applied by importer. This gives the importer more time to pay for their imports while our platform ensures the exporters are paid in-time.`,
    TF_TPF: `The finance can be applied by importer. This gives the importer more time to pay for their imports while our platform ensures the exporters are paid in-time.`,
    LF_IF: `Invoice Factoring is a type of short-term accounts receivable financing, where you
    effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant
    (seller) gets the cash from the financial institution based on the commercial terms agreed and the trading
    partner (buyer) pays back to the financial institution on the due date.`,
    LF_ID: `Invoice Discounting is a form of short-term borrowing against your outstanding invoices.
    The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and
    the applicant (seller) pays back to the financial institution on the due date.`,
    LF_RF: `The finance can be applied by buyer. This gives the buyer more time to pay while our platform ensures the sellers are paid in-time.`,
    LF_TPF: `The finance can be applied by buyer. This gives the buyer more time to pay for their imports while our platform ensures the sellers are paid in-time.`
  };

  productTypeCodesForApplyCFTable = {
    LF_ID: `Logistics Finance: Invoice Discounting`,
    LF_IF: `Logistics Finance: Invoice Factoring`,
    LF_RF: `Logistics Finance: Reverse Factoring`,
    LF_TP: `Logistics Finance: Trade Payables Financing`,
    LF_IFWOR: `Logistics Finance: Invoice Factoring W/O Recourse`,
    TF_IF: `Trade Finance: Invoice Factoring`,
    TF_ID: `Trade Finance: Invoice Discounting`,
    TF_RF: `Trade Finance: Reverse Factoring`,
    TF_TP: `Trade Finance: Trade Payables Financing`,
    TF_IVF: `Inventory Finance`,
    TF_IVFB: `Inventory Finance - Buyer`,
    TF_IVFS: `Inventory Finance - Seller`,
    TF_IFWOR: `Trade Finance: Invoice Factoring W/O Recourse`,
    TF_RCF: `Revolving Credit Facility`
  };

  counterPartyTitleMapping = {
    INVOICE_FACTORING: 'Invoice Factoring',
    INVOICE_DISCOUNTING: 'Invoice Discounting',
    REVERSE_FACTORING: 'Reverse Factoring',
    TRADE_PAYABLES_FINANCING: 'Trade Payables',
    INVOICE_FACTORING_WO_RECOURSE: 'Invoice Factoring W/O Recourse',

    LOGISTICS_FINANCE_INVOICE_FACTORING_IN_TRANSIT: 'Invoice Factoring - Logistics Finance - IN TRANSIT',
    LOGISTICS_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT: 'Invoice Discounting - Logistics Finance - IN TRANSIT',
    LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT: 'Invoice Factoring W/O Recourse - Logistics Finance - IN TRANSIT',
    TRADE_FINANCE_INVOICE_FACTORING_IN_TRANSIT: 'Invoice Factoring - Trade Finance - IN TRANSIT',
    TRADE_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT: 'Invoice Discounting - Trade Finance - IN TRANSIT',
    TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT: 'Invoice Factoring W/O Recourse - Trade Finance - IN TRANSIT',

    LOGISTICS_FINANCE_REVERSE_FACTORING_IN_TRANSIT: 'Reverse Factoring - Logistics Finance - IN TRANSIT',
    LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT: 'Trade Payables - Logistics Finance - IN TRANSIT',
    TRADE_FINANCE_REVERSE_FACTORING_IN_TRANSIT: 'Reverse Factoring - Trade Finance - IN TRANSIT',
    TRADE_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT: 'Trade Payables - Trade Finance - IN TRANSIT',

    LOGISTICS_FINANCE_REVERSE_FACTORING_DEFERRED: 'Reverse Factoring - Logistics Finance - DEFERRED',
    LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED: 'Trade Payables - Logistics Finance - DEFERRED',
    TRADE_FINANCE_REVERSE_FACTORING_DEFERRED: 'Reverse Factoring - Trade Finance - DEFERRED',
    TRADE_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED: 'Trade Payables - Trade Finance - DEFERRED',

    LOGISTICS_FINANCE_INVOICE_FACTORING_DEFERRED: 'Invoice Factoring - Logistics Finance - DEFERRED',
    LOGISTICS_FINANCE_INVOICE_DISCOUNTING_DEFERRED: 'Invoice Discounting - Logistics Finance - DEFERRED',
    LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED: 'Invoice Factoring W/O Recourse - Logistics Finance - DEFERRED',
    TRADE_FINANCE_INVOICE_FACTORING_DEFERRED: 'Invoice Factoring - Trade Finance - DEFERRED',
    TRADE_FINANCE_INVOICE_DISCOUNTING_DEFERRED: 'Invoice Discounting - Trade Finance - DEFERRED',
    TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED: 'Invoice Factoring W/O Recourse - Trade Finance - DEFERRED',
  }

  FINANCE_TYPE_CODE_MAPPING = {
    LOGISTIC_FINANCE_PAYABLE_REVERSE_FACTORING: 'Logistics Finance - Payables (Reverse Factoring)',
    LOGISTICS_FINANCE_TRADE_PAYABLE_FINANCING: 'Logistics Finance - Payables (Trade Payables Financing)',
    LOGISTIC_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING: 'Logistics Finance - Receivables (Invoice Discounting)',
    LOGISTIC_FINANCE_RECEIVABLE_INVOICE_FACTORING: 'Logistics Finance - Receivables (Invoice Factoring)',
    LOGISTIC_FINANCE_REC_INVOICE_FACTORING_WO_REC: 'Logistics Finance - Receivables (Invoice Factoring W/O Recourse)',
    TRADE_FINANCE_PAYABLE_REVERSE_FACTORING: 'Trade Finance - Payables (Reverse Factoring)',
    TRADE_FINANCE_TRADE_PAYABLE_FINANCING: 'Trade Finance - Payables (Trade Payables Financing)',
    TRADE_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING: 'Trade Finance - Receivables (Invoice Discounting)',
    TRADE_FINANCE_RECEIVABLE_INVOICE_FACTORING: 'Trade Finance - Receivables (Invoice Factoring)',
    TRADE_FINANCE_REC_INVOICE_FACTORING_WO_REC: 'Trade Finance - Receivables (Invoice Factoring W/O Recourse)',
    INVENTORY_FINANCE: 'Inventory Finance',
    REVOLVING_CREDIT_FACILITY: 'Revolving Credit Facility',
    BUY_SELL: "Buy Sell"
  };

  DETAILED_FINANCE_TYPE_CODE_MAPPING = {
    LOGISTIC_FINANCE_PAYABLE_REVERSE_FACTORING: 'Logistics Finance (for Freight Forwarders) - Payables (Reverse Factoring)',
    LOGISTICS_FINANCE_TRADE_PAYABLE_FINANCING: 'Logistics Finance (for Freight Forwarders) - Payables (Trade Payables Financing)',
    LOGISTIC_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING: 'Logistics Finance (for Freight Forwarders) - Receivables (Invoice Discounting)',
    LOGISTIC_FINANCE_RECEIVABLE_INVOICE_FACTORING: 'Logistics Finance (for Freight Forwarders) - Receivables (Invoice Factoring)',
    LOGISTIC_FINANCE_REC_INVOICE_FACTORING_WO_REC: 'Logistics Finance (for Freight Forwarders) - Receivables (Invoice Factoring W/O Recourse)',
    TRADE_FINANCE_PAYABLE_REVERSE_FACTORING: 'Trade Finance (for BCOs; Importers & Exporters) - Payables (Reverse Factoring)',
    TRADE_FINANCE_TRADE_PAYABLE_FINANCING: 'Trade Finance (for BCOs; Importers & Exporters) - Payables (Trade Payables Financing)',
    TRADE_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING: 'Trade Finance (for BCOs; Importers & Exporters) - Receivables (Invoice Discounting)',
    TRADE_FINANCE_RECEIVABLE_INVOICE_FACTORING: 'Trade Finance (for BCOs; Importers & Exporters) - Receivables (Invoice Factoring)',
    TRADE_FINANCE_REC_INVOICE_FACTORING_WO_REC: 'Trade Finance (for BCOs; Importers & Exporters) - Receivables (Invoice Factoring W/O Recourse)',
    INVENTORY_FINANCE: 'Inventory Finance',
    REVOLVING_CREDIT_FACILITY: 'Revolving Credit Facility',
    BUY_SELL: "Buy Sell"
  };

  productsToKYCProductsMAP = {
    'Trade Finance: Invoice Factoring': "TRADE_FINANCE_RECEIVABLE_INVOICE_FACTORING",
    'Trade Finance: Invoice Factoring W/O Recourse': 'TRADE_FINANCE_REC_INVOICE_FACTORING_WO_REC',
    'Trade Finance: Invoice Discounting': "TRADE_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING",
    'Trade Finance: Reverse Factoring': "TRADE_FINANCE_PAYABLE_REVERSE_FACTORING",
    'Trade Finance: Trade Payables Financing': "TRADE_FINANCE_TRADE_PAYABLE_FINANCING",
    'Logistics Finance: Invoice Factoring': "LOGISTIC_FINANCE_RECEIVABLE_INVOICE_FACTORING",
    'Logistics Finance: Invoice Factoring W/O Recourse': 'LOGISTIC_FINANCE_REC_INVOICE_FACTORING_WO_REC',
    'Logistics Finance: Invoice Discounting': "LOGISTIC_FINANCE_RECEIVABLE_INVOICE_DISCOUNTING",
    'Logistics Finance: Reverse Factoring': "LOGISTIC_FINANCE_PAYABLE_REVERSE_FACTORING",
    'Logistics Finance: Trade Payables Financing': "LOGISTIC_FINANCE_PAYABLE_REVERSE_FACTORING",
    'Inventory Finance - Buyer': 'INVENTORY_FINANCE',
    'Inventory Finance - Seller': 'INVENTORY_FINANCE',
    'Revolving Credit Facility': 'REVOLVING_CREDIT_FACILITY'
  }

  getProductOptions(): any[] {
    const uniqueProducts = Object.keys(this.productsToKYCProductsMAP);
    return uniqueProducts.map((item, index) => ({ value: index, name: item }));
  }

  allProductDefinitions = [
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'TRADE_FINANCE',
      productType: 'INVOICE_DISCOUNTING',
      description: 'Invoice Discounting - Trade Finance',
      mawaniRefKey: 'trade_finance_invoice_discounting'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'TRADE_FINANCE',
      productType: 'INVOICE_FACTORING',
      description: 'Invoice Factoring - Trade Finance',
      mawaniRefKey: 'trade_finance_invoice_factoring'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'TRADE_FINANCE',
      productType: 'INVOICE_FACTORING_WO_RECOURSE',
      description: 'Invoice Factoring without recourse - Trade Finance',
      mawaniRefKey: 'trade_finance_invoice_factoring_wo_recourse'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'TRADE_FINANCE',
      productType: 'REVERSE_FACTORING',
      description: 'Reverse Factoring - Trade Finance',
      mawaniRefKey: 'trade_finance_reverse_factoring'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'TRADE_FINANCE',
      productType: 'TRADE_PAYABLES_FINANCING',
      description: 'Trade Payables - Trade Finance',
      mawaniRefKey: 'trade_finance_trade_payables_financing'
    },
    {
      superCategory: 'LOAN_OR_ADVANCE',
      category: 'TRADE_FINANCE',
      productType: 'INVENTORY_FINANCE_BUYER',
      description: 'Inventory Finance - Buyer',
      mawaniRefKey: 'trade_finance_inventory_finance_buyer'
    },
    {
      superCategory: 'LOAN_OR_ADVANCE',
      category: 'TRADE_FINANCE',
      productType: 'INVENTORY_FINANCE_SELLER',
      description: 'Inventory Finance - Seller',
      mawaniRefKey: 'trade_finance_inventory_finance_seller'
    },
    {
      superCategory: 'LOAN_OR_ADVANCE',
      category: 'TRADE_FINANCE',
      productType: 'RCF',
      description: 'Revolving Credit Facility',
      mawaniRefKey: 'trade_finance_revolving_credit_facility'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'LOGISTICS_FINANCE',
      productType: 'INVOICE_DISCOUNTING',
      description: 'Invoice Discounting - Logistics Finance',
      mawaniRefKey: 'logistics_finance_invoice_discounting'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'LOGISTICS_FINANCE',
      productType: 'INVOICE_FACTORING',
      description: 'Invoice Factoring - Logistics Finance',
      mawaniRefKey: 'logistics_finance_invoice_factoring'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'LOGISTICS_FINANCE',
      productType: 'INVOICE_FACTORING_WO_RECOURSE',
      description: 'Invoice Factoring without recourse - Logistics Finance',
      mawaniRefKey: 'logistics_finance_invoice_factoring_wo_recourse'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'LOGISTICS_FINANCE',
      productType: 'REVERSE_FACTORING',
      description: 'Reverse Factoring - Logistics Finance',
      mawaniRefKey: 'logistics_finance_reverse_factoring'
    },
    {
      superCategory: 'RECEIVABLE_PURCHASE',
      category: 'LOGISTICS_FINANCE',
      productType: 'TRADE_PAYABLES_FINANCING',
      description: 'Trade Payables - Logistics Finance',
      mawaniRefKey: 'logistics_finance_trade_payables_financing'
    },
  ];

  productConfig: ProductConfig = {
    TRADE_FINANCE: {
      INVOICE_DISCOUNTING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_DISCOUNTING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Discounting - Trade Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: 'Invoice Discounting is a form of short-term borrowing against your outstanding invoices. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the applicant (seller) pays back to the financial institution on the due date.'
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'EXPORTER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'IMPORTER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_ID'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: true,
              isEditable: true,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: true,
              isEditable: true
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVOICE_FACTORING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_FACTORING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Factoring - Trade Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `Invoice Factoring is a type of short-term accounts receivable financing, where you effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the trading partner (buyer) pays back to the financial institution on the due date.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'EXPORTER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'IMPORTER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IF'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: true,
              isEditable: true,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: true,
              isEditable: true
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: false,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: true
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: false,
              isEditable: false,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            EXTRA_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Currency: Amount Received From Counter Party'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Amount Received From Counter Party'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            HBL_NO: {
              isVisible: true,
              isEditable: true,
              isMandatory: true,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant/Counter Party'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      REVERSE_FACTORING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'REVERSE_FACTORING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Reverse Factoring - Trade Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: 'The finance can be applied by buyer. This gives the buyer more time to pay while our platform ensures the sellers are paid in-time.'
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'IMPORTER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'EXPORTER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_RF'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Buyer.'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: true,
              isEditable: true
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Disbursement Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: true,
          isEditable: true
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      TRADE_PAYABLES_FINANCING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'TRADE_PAYABLES_FINANCING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Trade Payables - Trade Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: 'The finance can be applied by buyer. This gives the buyer more time to pay while our platform ensures the sellers are paid in-time.'
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'IMPORTER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'EXPORTER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_TP'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Buyer.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: true,
              isEditable: true
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Disbursement Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: true,
          isEditable: true
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVOICE_FACTORING_WO_RECOURSE: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_FACTORING_WO_RECOURSE'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Factoring without recourse - Trade Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `Invoice Factoring is a type of short-term accounts receivable financing, where you effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the trading partner (buyer) pays back to the financial institution on the due date.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'EXPORTER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        RECOUSE_ON: {
          isVisible: false,
          label: 'NONE'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'IMPORTER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IFWOR'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: true,
              isEditable: true,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: true,
              isEditable: true
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: false,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: true
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: false,
              isEditable: false,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            EXTRA_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Currency: Amount Received From Counter Party'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Amount Received From Counter Party'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_FROM_CP: {
              isVisible: true, //this.productType === ProductType.invoiceFactoring
              isEditable: true,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: true,
          fieldData: {
            HBL_NO: {
              isVisible: true,
              isEditable: true,
              isMandatory: true,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant/Counter Party'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVENTORY_FINANCE_BUYER: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'LOAN_OR_ADVANCE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVENTORY_FINANCE_BUYER'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: false,
              isEditable: false
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Inventory Finance - Buyer'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: '-'
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: false,
          label: 'NONE'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IVFB'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: false,
              isEditable: false,
              fieldType: '',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: false,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: false,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: true,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: false,
          isEditable: false
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: false,
          isEditable: false,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: false,
          isEditable: false,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: false,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVENTORY_FINANCE_SELLER: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'LOAN_OR_ADVANCE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVENTORY_FINANCE_SELLER'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: false,
              isEditable: false
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Inventory Finance - Seller'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: '-'
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: false,
          label: 'NONE'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IVFS'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: false,
              isEditable: false,
              fieldType: '',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: false,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: false,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: true,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: false,
          isEditable: false
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: true,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: false,
          isEditable: false,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: false,
          isEditable: false,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: false,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      RCF: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'LOAN_OR_ADVANCE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'TRADE_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'RCF'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: false,
              isEditable: false
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Revolving Credit Facility'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `A working capital revolving credit facility, often referred to as a revolving credit facility, is a financial arrangement that provides a company with access to a specified amount of funds for its day-to-day operational needs. It is a type of  business financing that helps companies manage their short-term working capital requirements, such as covering operational expenses, managing inventory, or meeting short-term liabilities.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'NONE'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_RCF'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: true,
              isEditable: true,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: false,
              isEditable: false,
              fieldType: '',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'DATE'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: false,
                  isEditable: false,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: false,
              isEditable: false
            },
            INTEREST_RATE: {
              isVisible: false,
              isEditable: false
            },
            TRANSACTION_FEE: {
              isVisible: false,
              isEditable: false
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: false,
                    },
                    INVOICE_DATE: {
                      isVisible: false,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: false,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: false,
          isEditable: false
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: true,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: false,
          isEditable: false,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: false,
          isEditable: false,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: false,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      }
    },
    LOGISTICS_FINANCE: {
      INVOICE_DISCOUNTING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'LOGISTICS_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_DISCOUNTING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Discounting - Logistics Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `Invoice Discounting is a form of short-term borrowing against your outstanding invoices. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the applicant (seller) pays back to the financial institution on the due date.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_ID'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,//MAKE FALSE FOR OTHERS
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: true,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVOICE_FACTORING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'LOGISTICS_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_FACTORING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Factoring - Logistics Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `Invoice Factoring is a type of short-term accounts receivable financing, where you effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the trading partner (buyer) pays back to the financial institution on the due date.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IF'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: false,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: true
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: false,
              isEditable: false,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            EXTRA_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Currency: Amount Received From Counter Party'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Amount Received From Counter Party'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant/Counter Party'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      REVERSE_FACTORING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'LOGISTICS_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'REVERSE_FACTORING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Reverse Factoring - Logisitcs Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `The finance can be applied by buyer. This gives the buyer more time to pay while our platform ensures the sellers are paid in-time.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_RF'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Buyer.',
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Disbursement Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: true,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: false,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      TRADE_PAYABLES_FINANCING: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'LOGISTICS_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'TRADE_PAYABLES_FINANCING'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Trade Payables - Logistics Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `The finance can be applied by buyer. This gives the buyer more time to pay while our platform ensures the sellers are paid in-time.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'APPLICANT'
        },
        RECOUSE_ON: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_TP'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN_WITH_ADD_EDIT',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Buyer.'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: false,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: false
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Disbursement Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: false,
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: false,
              isEditable: false,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: false,
              isEditable: false,
            },
            EXTRA_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: false,
              isEditable: false,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Currency: Amount Received From Customer'
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Amount Received From Customer'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_FROM_CP: {
              isVisible: false,
              isEditable: false,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: true,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            LENDING: {
              isVisible: false,
              isEditable: false,
            },
            NON_LENDING: {
              isVisible: false,
              isEditable: false,
              label: ''
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
      INVOICE_FACTORING_WO_RECOURSE: {
        PRODUCT_SUPER_CATEGORY: {
          isVisible: true,
          label: 'RECEIVABLE_PURCHASE'
        },
        PRODUCT_CATEGORY: {
          isVisible: true,
          label: 'LOGISTICS_FINANCE',
        },
        PRODUCT_TYPE: {
          isVisible: true,
          label: 'INVOICE_FACTORING_WO_RECOURSE'
        },
        FINANCE_TYPE: {
          isVisible: true,
          label: 'DEFERRED/IN_TRANSIT',
          fieldData: {
            DEFERRED: {
              isVisible: true,
              isEditable: true
            },
            IN_TRANSIT: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PRODUCT_NAME: {
          isVisible: true,
          label: 'Invoice Factoring without recourse - Logistics Finance'
        },
        PRODUCT_DESCRIPTION: {
          isVisible: true,
          label: `Invoice Factoring is a type of short-term accounts receivable financing, where you effectively 'sell' your outstanding invoices to a third-party commercial finance company. The applicant (seller) gets the cash from the financial institution based on the commercial terms agreed and the trading partner (buyer) pays back to the financial institution on the due date.`
        },
        APPLICANT_TYPE: {
          isVisible: true,
          label: 'SELLER'
        },
        DISBURSEMENT_TO: {
          isVisible: true,
          label: 'APPLICANT'
        },
        COLLECTION_FROM: {
          isVisible: true,
          label: 'COUNTER_PARTY'
        },
        RECOUSE_ON: {
          isVisible: false,
          label: 'NONE'
        },
        COUNTERPARTY_TYPE: {
          isVisible: true,
          label: 'BUYER'
        },
        DISBURSAL_RESTRICTION_KEY: {
          isVisible: true,
          label: 'restrict_disbursal_IFWOR'
        },
        OCR: {
          isVisible: true,
          isEditable: false,
          isMandatory: false
        },
        APPLICATION_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        ACCEPT_TERMS_CONTENT: {
          isVisible: true,
          isEditable: true,
        },
        APPLICANT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            APPLICANT: {
              isVisible: false,
              isEditable: false,
            },
            FINANCIAL_INSTITUTION: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            FINANCING_TYPE: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            COUNTER_PARTY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'SEARCHABLE_DROP_DOWN',
            },
            INVOICE_CURRENCY: {
              isVisible: true,
              isEditable: true,
              fieldType: 'DROP_DOWN'
            },
            INVOICE_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INVOICE_ID: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT'
                },
                INVOICE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE'
                },
                INVOICE_TERMS: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_DUE_DATE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'DATE',
                  label: 'The due date on which the payment is expected to be received from the Counter Party.'
                },
                INVOICE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'TEXT_NUMBER'
                },
                INVOICE_FILE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'FILE'
                },
                ADD_INVOICE: {
                  isVisible: true,
                  isEditable: true,
                  fieldType: 'BUTTON'
                }
              }
            },
          }
        },
        INVOICE_CF_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TOTAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        SOFR_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            TENURE: {
              isVisible: true,
              isEditable: true
            },
            DATE: {
              isVisible: true,
              isEditable: true
            },
            RATE: {
              isVisible: true,
              isEditable: true
            },
            MARGIN: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        DISBURSEMENT_TERMS_REQUEST: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            BL_DATE: {
              isVisible: false,
              isEditable: false
            },
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: { // comparison: 'MORE_THAN',
                  fieldData: {
                    CURRENT_DATE: {
                      isVisible: true,
                    },
                    BL_DATE: {
                      isVisible: true,
                    },
                    INVOICE_DATE: {
                      isVisible: true,
                    }
                  }
                },
                max: { // comparison: 'LESS_THAN',
                  fieldData: {
                    BL_DATE_PLUS_X_DAYS: {
                      isVisible: true,
                    },
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    }
                  }
                }
              }
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
              conditions: {
                max: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_FINANCING_TENURE']
                }
              }
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: false,
              fieldData: {
                equal: {
                  fieldData: {
                    INVOICE_DUE_DATE: {
                      isVisible: true,
                    },
                    DISBURSAL_DATE_PLUS_MAX_FINANCING_TENURE: {
                      isVisible: true
                    }
                  }
                }
              },
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                min: {
                  fieldData: {
                    SUM_OF_RECEIVABLE_PROCESSING_DISCOUNT_FEE_AMOUNTS: {
                      isVisible: true
                    }
                  }
                }
              },
              conditions: {
                min: {
                  comparison: 'LESS_THAN_OR_EQUAL_TO',
                  comparisonSymbol: '<=',
                  fieldsAppliedTo: ['MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
                equal: {
                  comparison: 'DIVISION',
                  comparisonSymbol: '/',
                  fieldsAppliedTo: ['DISBURSAL_AMOUNT', 'INVOICE_AMOUNT']
                }
              }
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true,
              conditions: {
                equal: {
                  comparison: 'MULTIPLY',
                  comparisonSymbol: '*',
                  fieldsAppliedTo: ['INVOICE_AMOUNT', 'MAX_SANCTIONED_AMOUNT_PERCENTAGE']
                },
              },
              label: 'Receivable Amount'
            },
            INTEREST_RATE: {
              isVisible: true,
              isEditable: true,
            },
            TRANSACTION_FEE: {
              isVisible: true,
              isEditable: true,
            },
            BENEFICIARY_BANK_DETAILS: {
              isVisible: true,
              isEditable: true,
            },
            CP_BANK_DETAILS: {
              isVisible: false,
              isEditable: false,
            }
          }
        },
        REQUEST_TERMS_DETAILS: {
          isVisible: false,
        },
        DISBURSEMENT_TERMS_APPROVED: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SANCTIONED_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            DISBURSAL_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            REVISED_DUE_DATE: {
              isVisible: true,
              isEditable: true
            },
            REASON_FOR_DELAY: {
              isVisible: true,
              isEditable: true
            },
            UPDATED_DISBURSAL_AND_DUE_DATE: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                ACTUAL_DISBURSAL_DATE: {
                  isVisible: true,
                  isEditable: true
                },
                UPDATED_DUE_DATE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            }
          }
        },
        APPLICATION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HEADING: {
              isVisible: true,
              isEditable: false,
            },
            PROCESS: {
              isVisible: true,
              isEditable: false,
            },
            DETAIL: {
              isVisible: true,
              isEditable: false,
            },
          }
        },
        ACCEPTED_TERMS: {
          isVisible: true,
          isEditable: true,
        },
        ACTUAL_TRANSACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            FINANCING_TENURE: {
              isVisible: true,
              isEditable: true,
            },
            REQUESTED_AMOUNT_APPROVED: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHARGES_TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                OTHER_CHANGES_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                VIEW_TRANSACTION_BTN: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            BALANCES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PAYMENT_MADE_BY_BUYER: {
                  isVisible: true,//MAKE FALSE FOR OTHERS
                  isEditable: true,
                },
                EXTRA_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_PAYMENT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            WAIVER_COMMENTS: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        APPLICANT_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        COUNTER_PARTY_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FI_BANK_DETAILS: {
          isVisible: true,
          isEditable: true
        },
        FEE_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            INTEGRATED_FEES: {
              isVisible: true,
              isEditable: true
            },
            INTEREST_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TRANSACTION_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                AMOUNT: {
                  isVisible: true,
                  isEditable: true
                },
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true
                }
              }
            },
            OVERDUE_FEE_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            SETTLEMENT_AMOUNT: {
              isVisible: true,
              isEditable: true
            },
            ANNUAL_PROCESSING_FEES: {
              isVisible: true,
              isEditable: true
            }
          }
        },
        PAYMENT_SIMULATOR: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SETTLEMENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            SIMULATOR_FIELDS: {
              isVisible: true,
              isEditable: true,
            },
            SETTLEMENT_PREVIEW_ADVICE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        TRANSACTION_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_SUB_TYPE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            EVENT_DATE: {
              isVisible: true,
              isEditable: true,
            },
            UPDATED_DUE_DATE: {
              isVisible: true,
              isEditable: true,
            },
            ACTUAL_DISBURSAL_DATE: {
              isVisible: true,
              isEditable: true,
            },
            OVERDUE_FEE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            OTHER_CHARGES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TYPE: {
                  isVisible: true,
                  isEditable: true,
                },
                AMOUNT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            INTEREST_RATE_APPLICABLE: {
              isVisible: true,
              isEditable: true,
            },
            SOFR_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TENURE: {
                  isVisible: true,
                  isEditable: true,
                },
                DATE: {
                  isVisible: true,
                  isEditable: true,
                },
                RATE: {
                  isVisible: true,
                  isEditable: true,
                },
                MARGIN: {
                  isVisible: true,
                  isEditable: true,
                },
              }
            }
          }
        },
        SUPPORTING_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            DOWNLOAD: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        BANK_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DEBIT_FROM: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_TO: {
              isVisible: true,
              isEditable: true,
            },
            DEBIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            CREDIT_ACCOUNT_NO: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_MODE: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_BY: {
              isVisible: true,
              isEditable: true,
            },
            MARGIN_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            PAYMENT_REF_NO: {
              isVisible: true,
              isEditable: true,
            },
            REMARKS: {
              isVisible: true,
              isEditable: true,
            },
            FEES: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                INTEREST_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        SETTLEMENT_DETAILS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            CURRENCY: {
              isVisible: true,
              isEditable: true,
            },
            TOTAL_INVOICE_AMT: {
              isVisible: true,
              isEditable: true,
            },
            AMOUNT_RECEIVED_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            PRINCIPAL_AMT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_AMTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                PRINCIPAL: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TAX_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            FEE_ON_BALANCE_PRINCIPAL: {
              isVisible: false,
              isEditable: false,
              fieldData: {
                INTEREST: {
                  isVisible: true,
                  isEditable: true,
                },
                TRANSACTION_FEE: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            TOTAL_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            BALANCE_INVOICE_AMOUNT: {
              isVisible: true,
              isEditable: true,
            },
            EXTRA_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            PENDING_CUSTOMER_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            BALANCE_AMOUNT_TO_CUSTOMER: {
              isVisible: true,
              isEditable: true,
            },
            CURRENCY_AMOUNT_TO_BE_RECEIVED: {
              isVisible: true,
              isEditable: true,
              label: 'Currency: Amount Received From Counter Party',
            },
            AMOUNT_TO_BE_RECEIVED: {
              isVisible: false,
              isEditable: false,
              label: 'Amount Received From Counter Party'
            },
            TAX_DETAILS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                RATE_CODE: {
                  isVisible: true,
                  isEditable: true,
                },
                REGIME_CODE: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        TRANSACTION_EVENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            EVENT: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT: {
              isVisible: false,
              isEditable: false,
            },
            AMOUNT_FROM_CP: {
              isVisible: true,
              isEditable: true,
            },
            SETTLE_AMT_AGAINST: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                TRNX_FEE_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                TAX_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                OVERDUE_INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                INTEREST_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                PRINCIPAL_AMT: {
                  isVisible: true,
                  isEditable: true,
                },
                EXTRA_BALANCE: {
                  isVisible: true,
                  isEditable: true,
                },
                SHORT_BALANCE_SETTLED: {
                  isVisible: true,
                  isEditable: true,
                },
                WAIVER_COMMENTS: {
                  isVisible: true,
                  isEditable: true,
                  fieldData: {
                    OPERATIONS: {
                      isVisible: true,
                      isEditable: true,
                    },
                    CREDIT_ANALYST: {
                      isVisible: true,
                      isEditable: true,
                    }
                  }
                }
              }
            }
          }
        },
        PREVIOUS_SHORT_PAYMENT: {
          isVisible: false,
          isEditable: false,
          fieldData: {
            APPLICATION_NO: {
              isVisible: true,
              isEditable: true,
            },
            SHORT_PAYMENT_AMT: {
              isVisible: true,
              isEditable: true,
            },
            MONEY_TO_BE_REMITTED: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        STATUS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            SELECTION: {
              isVisible: true,
              isEditable: true,
            },
            INTERNAL_COMMENTS: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DPWFS_COMMISSION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            FINANCE_COMMISSION_AMT: {
              isVisible: true,
              isEditable: false
            },
            TRANSACTION_FEE_AMT: {
              isVisible: true,
              isEditable: false
            },
            MISC_FEES_COMMISSION: {
              isVisible: true,
              isEditable: false
            }
          }
        },
        MARGIN_AMOUNT: {
          isVisible: false,
          isEditable: false
        },
        TRACKING_INFORMATION: {
          isVisible: true,
          isEditable: true,
          isMandatory: false,
          fieldData: {
            HBL_NO: {
              isVisible: false,
              isEditable: false,
              isMandatory: false,
            },
          }
        },
        FI_APPROVAL_DOCS: {
          isVisible: true,
          isEditable: true,
        },
        ASSIGNMENT_OF_RECEIVABLES: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            DOCUSIGN_BTN: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        ASSIGNMENT_OF_RECEIVABLES_VIEW: {
          isVisible: true,
          isEditable: true,
        },
        AGREEMENT_DOCUMENT: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            LENDING: {
              isVisible: true,
              isEditable: true,
            },
            NON_LENDING: {
              isVisible: true,
              isEditable: true,
              label: 'Agreement between Financial Institution and Applicant/Counter Party'
            }
          }
        },
        TRNX_MONITORING: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            RESPONSE_TABLE: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        FI_TERMS_VALIDATION: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            COMMENTS: {
              isVisible: true,
              isEditable: true,
            },
            DOCUMENTS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                DOWNLOAD: {
                  isVisible: true,
                  isEditable: true,
                },
                UPLOAD: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            },
            ACTIONS: {
              isVisible: true,
              isEditable: true,
              fieldData: {
                HISTORY: {
                  isVisible: true,
                  isEditable: true,
                },
                APPROVE: {
                  isVisible: true,
                  isEditable: true,
                },
                REJECT: {
                  isVisible: true,
                  isEditable: true,
                }
              }
            }
          }
        },
        ADVICE_DOCUMENTS: {
          isVisible: true,
          isEditable: true
        },
        HISTORY_INFORMATION: {
          isVisible: true,
          isEditable: true
        },
        WAIVE_OFF_OVERDUE_ACTIONS: {
          isVisible: true,
          isEditable: true,
          fieldData: {
            HISTORY: {
              isVisible: true,
              isEditable: true,
            },
            APPROVE: {
              isVisible: true,
              isEditable: true,
            },
            REJECT: {
              isVisible: true,
              isEditable: true,
            },
            WAIVE_OFF_OVERDUE_INTEREST: {
              isVisible: true,
              isEditable: true,
            }
          }
        },
        DUE_DATE_ACTIONS: {
          isVisible: true,
          isEditable: true,
        },
        REMARKS: {
          isVisible: true,
          isEditable: true
        }
      },
    }
  };


  private creditFacilityProductConfiguration: CreditFacilityConfig = {
    INVOICE_DISCOUNTING: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos:
          ['LOGISTICS_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT',
            'LOGISTICS_FINANCE_INVOICE_DISCOUNTING_DEFERRED',
            'TRADE_FINANCE_INVOICE_DISCOUNTING_IN_TRANSIT',
            'TRADE_FINANCE_INVOICE_DISCOUNTING_DEFERRED'
          ],
        isCategoryEnabled: true
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_ID',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'compact',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_ID',
        termsheetRequired: false,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: false,
        supplierAgreement: false
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: true,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    },
    INVOICE_FACTORING: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos:
          ['LOGISTICS_FINANCE_INVOICE_FACTORING_IN_TRANSIT',
            'LOGISTICS_FINANCE_INVOICE_FACTORING_DEFERRED',
            'TRADE_FINANCE_INVOICE_FACTORING_IN_TRANSIT',
            'TRADE_FINANCE_INVOICE_FACTORING_DEFERRED'
          ],
        isCategoryEnabled: true
      },
      applyConfig: {
        captureLimitRequired: false,
        restrictDisbursalKeyName: '', // this is not applicable for IF
        assignmentOfReceivablesApplicable: true,
        counterPartyAcceptanceRequired: true
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'full',
      },
      approveConfig: {
        captureLimitRequired: false,
        restrictDisbursalKeyName: '', // this is not applicable for IF
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: true,
        allowCPDeletion: true,
        supplierAgreement: false
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: true
      }
    },
    REVERSE_FACTORING: {
      commonConfig: {
        isBuyer: false,
        isSeller: true,
        allProductTypeCategoryFinanceCombos:
          ['LOGISTICS_FINANCE_REVERSE_FACTORING_IN_TRANSIT',
            'LOGISTICS_FINANCE_REVERSE_FACTORING_DEFERRED',
            'TRADE_FINANCE_REVERSE_FACTORING_IN_TRANSIT',
            'TRADE_FINANCE_REVERSE_FACTORING_DEFERRED'
          ],
        isCategoryEnabled: true
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_RF',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'compact',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_RF',
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: true,
        supplierAgreement: true
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    },
    TRADE_PAYABLES_FINANCING: {
      commonConfig: {
        isBuyer: false,
        isSeller: true,
        allProductTypeCategoryFinanceCombos:
          ['LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT',
            'LOGISTICS_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED',
            'TRADE_FINANCE_TRADE_PAYABLES_FINANCING_IN_TRANSIT',
            'TRADE_FINANCE_TRADE_PAYABLES_FINANCING_DEFERRED'
          ],
        isCategoryEnabled: true
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_TP',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'compact',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_TP',
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: true,
        supplierAgreement: true
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    },
    INVOICE_FACTORING_WO_RECOURSE: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos:
          ['LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT',
            'LOGISTICS_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED',
            'TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_IN_TRANSIT',
            'TRADE_FINANCE_INVOICE_FACTORING_WO_RECOURSE_DEFERRED'
          ],
        isCategoryEnabled: true
      },
      applyConfig: {
        captureLimitRequired: false,
        restrictDisbursalKeyName: '', // this is not applicable for IF
        assignmentOfReceivablesApplicable: true,
        counterPartyAcceptanceRequired: true
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'full',
      },
      approveConfig: {
        captureLimitRequired: false,
        restrictDisbursalKeyName: '',// this is not applicable for IF
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: true,
        allowCPDeletion: true,
        supplierAgreement: false
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: true
      }
    },
    INVENTORY_FINANCE_BUYER: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos: [],
        isCategoryEnabled: false
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_IVFB',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'na',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_IVFB',
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: true,
        supplierAgreement: true
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    },
    INVENTORY_FINANCE_SELLER: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos: [],
        isCategoryEnabled: false
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_IVFS',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'na',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_IVFS',
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: true,
        supplierAgreement: true
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    },
    REVOLVING_CREDIT_FACILITY: {
      commonConfig: {
        isBuyer: true,
        isSeller: false,
        allProductTypeCategoryFinanceCombos: [],
        isCategoryEnabled: false
      },
      applyConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_RCF',
        assignmentOfReceivablesApplicable: false,
        counterPartyAcceptanceRequired: false
      },
      counterPartyComponentsConfig: {
        counterPartyFormType: 'na',
      },
      approveConfig: {
        captureLimitRequired: true,
        restrictDisbursalKeyName: 'restrict_disbursal_RCF',
        termsheetRequired: true,
        assignmentOfReceivablesApplicable: false,
        allowCPDeletion: true,
        supplierAgreement: true
      },
      creditLimitTermsConfig: {
        minCreditPeriodVisible: false,
        maxFinancingTenureOptionsProductCategoryList: ['TRADE_FINANCE'],
        importerAcceptanceValidatorRequired: false
      }
    }
  };

  creditFacilityCounterPartyFormType = {
    FULL: 'full',
    COMPACT: 'compact',
    NOT_APPLICABLE: 'na'
  }

  getAllProductListForCreditFacilityConfig(): string[] {
    return Object.keys(this.creditFacilityProductConfiguration);
  }

  getGivenKeyValueForCreditFacilityConfig(productType: string, configType: string, requiredKey: string): any {
    return this.creditFacilityProductConfiguration[productType]?.[configType]?.[requiredKey];
  }

  getAllProductCategoryList(): string[] {
    return Object.keys(this.conditionMapConfig.productCategory);
  }

  getAllFinanceTypeList(): string[] {
    return Object.keys(this.conditionMapConfig.financingType);
  }

  combineProductCategoryTypeAndFinancing(productCategory: string, productType: string, financingType: string): string {
    return productCategory + '_' + productType + '_' + financingType;
  }

  combineProductCategoryAndProductType(productCategory: string, productType: string): string {
    if (!productCategory) {
      productCategory = 'TRADE_FINANCE'
    } else {
      productCategory = this.getCategoryAbbreviationSnakeUC(productCategory);
    }
    productType = this.getProductTypeAbbreviationSnakeUC(productType);
    return productCategory + '_' + productType;
  }

  getProductName(category: string, type: string): string {
    return this.conditionMapConfig.productType[type] + '-' + this.conditionMapConfig.productCategory[category];
  }

  replaceSpecialCharacterWithSpace(inputString: string, separator: string): string {
    return inputString.replace(/_+/g, ' ');
  }

  firstLetterCaptial(inputString: string, separator: string): string {
    return inputString
      .toLowerCase()
      .split(separator)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // LC stands for lower case
  getCategoryAbbreviationLC(category: any): string {
    if (category !== null && category !== undefined && category !== '') {
      if (typeof (category) === 'string') {
        return category.toLowerCase().includes('logistics') ? 'logistics' : 'trade';
      } else {
        return category === 0 || category === '1' ? 'trade' : 'logistics';
      }
    }
    return '';
  }

  // UC stands for upper case
  getCategoryAbbreviationSnakeUC(category: any): string {
    if (category !== null && category !== undefined && category !== '') {
      if (typeof (category) === 'string') {
        return category.toLowerCase().includes('logistics') ? 'LOGISTICS_FINANCE' : 'TRADE_FINANCE';
      } else {
        return category === 0 || category === '1' ? 'TRADE_FINANCE' : 'LOGISTICS_FINANCE';
      }
    }
    return '';
  }

  // LC stands for lower case
  getCategoryAbbreviationSnakeLC(category: any): string {
    const categoryLC = this.getCategoryAbbreviationSnakeUC(category);
    return categoryLC ? categoryLC.toLowerCase() : '';
  }

  getCategoryEnum(category: any): number {
    const categorySnakeUC = this.getCategoryAbbreviationSnakeUC(category);
    return categorySnakeUC.includes('TRADE') ? ProductCategory.Trade : ProductCategory.Logistics;
  }

  getCategoryNumInStrFormat(category: any): string {
    const categorySnakeUC = this.getCategoryAbbreviationSnakeUC(category);
    return categorySnakeUC.includes('TRADE') ? '1' : '2';
  }

  getCategoryFirstLetterCaptial(category: any): string {
    if (category === '' || category === null || category === undefined) {
      return '';
    }
    const categorySnakeUC = this.getCategoryAbbreviationSnakeUC(category);
    return this.firstLetterCaptial(categorySnakeUC, '_');
  }

  // CC stands for camel case => 'TradeFinance'
  getCategoryFirstLetterCapCC(value: string): string {
    if (value === '' || value === null || value === undefined) {
      return '';
    }
    const firstLetterCap = this.getCategoryFirstLetterCaptial(value);
    return firstLetterCap.replace(/_/g, '');
  }

  getCategoryDefinition(category: string): string {
    if (category === '' || category === null || category === undefined) {
      return '';
    }
    const categorySnakeUC = this.getCategoryAbbreviationSnakeUC(category);
    return this.conditionMapConfig.productCategory[categorySnakeUC].definition;
  }

  // UC stands for upper case
  getProductTypeAbbreviationSnakeUC(value: string | number): string {
    if (typeof (value) === 'string' && value === '0') {
      return 'All';
    } else if ((typeof (value) === 'string' && value === '1') || (typeof (value) === 'number' && value === 0) || (typeof (value) === 'string' && value.toLowerCase() === 'invoicediscounting') || (typeof (value) === 'string' && value.includes('INVOICE_DISCOUNTING')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('invoicediscounting'))) {
      return 'INVOICE_DISCOUNTING';
    } else if ((typeof (value) === 'string' && value === '5') || (typeof (value) === 'number' && value === 4) || (typeof (value) === 'string' && value.toLowerCase() === 'invoicefactoringworecourse') || (typeof (value) === 'string' && value.includes('INVOICE_FACTORING_WO_RECOURSE')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('invoicefactoringworecourse')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('invoicefactoringw/orecourse'))) {
      return 'INVOICE_FACTORING_WO_RECOURSE'
    } else if ((typeof (value) === 'string' && value === '2') || (typeof (value) === 'number' && value === 1) || (typeof (value) === 'string' && value.toLowerCase() === 'invoicefactoring') || (typeof (value) === 'string' && value.includes('INVOICE_FACTORING')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('invoicefactoring'))) {
      return 'INVOICE_FACTORING';
    } else if ((typeof (value) === 'string' && value === '3') || (typeof (value) === 'number' && value === 2) || (typeof (value) === 'string' && value.toLowerCase() === 'reversefactoring') || (typeof (value) === 'string' && value.includes('REVERSE_FACTORING')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('reversefactoring'))) {
      return 'REVERSE_FACTORING'
    } else if ((typeof (value) === 'string' && value === '4') || (typeof (value) === 'number' && value === 3) || (typeof (value) === 'string' && value.toLowerCase() === 'tradepayablesfinancing') || (typeof (value) === 'string' && value.includes('TRADE_PAYABLES_FINANCING')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('tradepayables'))) {
      return 'TRADE_PAYABLES_FINANCING'
    } else if ((typeof (value) === 'string' && value === '6') || (typeof (value) === 'number' && value === 5) || (typeof (value) === 'string' && value.toLowerCase() === 'inventoryfinancebuyer') || (typeof (value) === 'string' && value.includes('INVENTORY_FINANCE_BUYER')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('inventoryfinancebuyer'))) {
      return 'INVENTORY_FINANCE_BUYER'
    } else if ((typeof (value) === 'string' && value === '7') || (typeof (value) === 'number' && value === 6) || (typeof (value) === 'string' && value.toLowerCase() === 'inventoryfinanceseller') || (typeof (value) === 'string' && value.includes('INVENTORY_FINANCE_SELLER')) || (typeof (value) === 'string' && value.replace(/ |_|/g, '').toLowerCase().includes('inventoryfinanceseller'))) {
      return 'INVENTORY_FINANCE_SELLER'
    } else {
      return 'REVOLVING_CREDIT_FACILITY'
    }
  }

  getProductTypeDesc(finType: any): FinanceTypeInterface {
    let value = '';
    let viewValue = '';
    if ((typeof (finType) === 'string' && (finType === 'invoiceDiscounting' || finType === '1' || finType.includes('discounting')))
      || (typeof (finType) === 'number' && finType === ProductType.invoiceDiscounting)) {
      value = '1';
      viewValue = 'Invoice Discounting';
    } else if ((typeof (finType) === 'string' && (finType === 'reverseFactoring' || finType === '3' || finType.includes('reverse')))
      || (typeof (finType) === 'number' && finType === ProductType.reverseFactoring)) {
      value = '3';
      viewValue = 'Reverse Factoring';
    } else if ((typeof (finType) === 'string' && (finType === 'tradePayablesFinancing' || finType === '4' || finType.includes('payables')))
      || (typeof (finType) === 'number' && finType === ProductType.tradePayablesFinancing)) {
      value = '4';
      viewValue = 'Trade Payables Financing';
    } else if ((typeof (finType) === 'string' && (finType === 'inventoryFinanceBuyer' || finType === '6' || finType.includes('inventory') && finType.includes('buyer')))
      || (typeof (finType) === 'number' && finType === ProductType.inventoryFinanceBuyer)) {
      value = '6';
      viewValue = 'Inventory Finance Buyer';
    } else if ((typeof (finType) === 'string' && (finType === 'inventoryFinanceBuyer' || finType === '7' || finType.includes('inventory') && finType.includes('seller')))
      || (typeof (finType) === 'number' && finType === ProductType.inventoryFinanceSeller)) {
      value = '7';
      viewValue = 'Inventory Finance Seller';
    } else if ((typeof (finType) === 'string' && (finType === 'revolvingCreditFacility' || finType === '8' || finType.includes('revolving') && finType.includes('facility')))
      || (typeof (finType) === 'number' && finType === ProductType.revolvingCreditFacility)) {
      value = '8';
      viewValue = 'Revolving Credit Facility';
    } else if ((typeof (finType) === 'string' && (finType === 'invoiceFactoringWoRecourse' || finType === '5' || finType.includes('factoring') && finType.includes('recourse')))
      || (typeof (finType) === 'number' && finType === ProductType.invoiceFactoringWoRecourse)) {
      value = '5';
      viewValue = 'Invoice Factoring W/O Recourse';
    } else {
      value = '2';
      viewValue = 'Invoice Factoring'
    }
    return { value, viewValue };
  }

  // LC stands for lower case
  getProductTypeAbbreviationSnakeLC(value: string | number): string {
    if (value === '' || value === null || value === undefined) {
      return '';
    }
    const prodTypeSnakeUC = this.getProductTypeAbbreviationSnakeUC(value);
    return prodTypeSnakeUC.toLowerCase();
  }

  // LC stands for lower case
  getProductTypeFirstLetterCapital(value: string | number): string {
    if (value === '' || value === null || value === undefined) {
      return '';
    }
    const prodTypeSnakeUC = this.getProductTypeAbbreviationSnakeUC(value);
    return this.firstLetterCaptial(prodTypeSnakeUC, '_');
  }

  // CC stands for camel case => 'InvoiceFactoring'
  getProductTypeFirstLetterCapCC(value: string): string {
    if (value === '' || value === null || value === undefined) {
      return '';
    }
    const firstLetterCap = this.getProductTypeFirstLetterCapital(value);
    return firstLetterCap.replace(/_/g, '');
  }

  getProductTypeCamelCase(value): string {
    if (value === '' || value === null || value === undefined) {
      return '';
    }
    const productTypeSnackUC = this.getProductTypeAbbreviationSnakeUC(value);
    return this.convertToCamelCase(productTypeSnackUC);
  }


  getProductTypeEnum(value: string | number): number {
    const prodTypeSnakeUC = this.getProductTypeAbbreviationSnakeUC(value);
    switch (prodTypeSnakeUC) {
      case 'INVOICE_DISCOUNTING': {
        return ProductType.invoiceDiscounting;
      }
      case 'INVOICE_FACTORING': {
        return ProductType.invoiceFactoring;
      }
      case 'REVERSE_FACTORING': {
        return ProductType.reverseFactoring;
      }
      case 'TRADE_PAYABLES_FINANCING': {
        return ProductType.tradePayablesFinancing;
      }
      case 'INVOICE_FACTORING_WO_RECOURSE': {
        return ProductType.invoiceFactoringWoRecourse;
      }
      case 'INVENTORY_FINANCE_BUYER': {
        return ProductType.inventoryFinanceBuyer;
      }
      case 'INVENTORY_FINANCE_SELLER': {
        return ProductType.inventoryFinanceSeller;
      }
      case 'REVOLVING_CREDIT_FACILITY': {
        return ProductType.revolvingCreditFacility;
      }
      default: ''
    }
  }

  convertToCamelCase(value: string): string {
    if (!value) {
      return '';
    }
    return value.toLowerCase().replace(/_(.)/g, (match, firstLetter) => {
      return firstLetter.toUpperCase();
    });
  }

  validateProductControl(
    productCategory: string,
    productType: string,
    sectionKey: string,
    validationKey: string,
    rootFieldKey?: string,
    ...childFieldKeys: string[]
  ): boolean {
    if (!productCategory || !productType || !sectionKey) {
      return false;
    }

    const getConfigValue = (config: SectionConfig, keys: string[]): boolean => {
      let currentConfig: any = config;
      for (const key of keys) {
        if (!currentConfig.fieldData[key]) {
          return false;
        }
        currentConfig = currentConfig.fieldData[key];
      }

      return currentConfig[validationKey] || false;
    };

    const config = this.productConfig?.[productCategory]?.[productType]?.[sectionKey];

    if (!config) {
      return false;
    }

    if (rootFieldKey) {
      const keys = childFieldKeys.length > 0 ? [rootFieldKey, ...childFieldKeys] : [rootFieldKey];
      return getConfigValue(config, keys);
    } else {
      return config?.[validationKey] || false;
    }
  }

  getProdConfigValueForKey(
    productCategory: string,
    productType: string,
    sectionKey: string,
    returnKey: string,
    rootFieldKey?: string,
    childFieldKey_1?: string
  ): string {
    if (!productCategory || !productType || !sectionKey || !returnKey) {
      return 'false';
    }

    const getConfigValue = (config: SectionConfig, keys: string[]): string => {
      let currentConfig: any = config;
      for (const key of keys) {
        if (!currentConfig.fieldData[key]) {
          return '';
        }
        currentConfig = currentConfig.fieldData[key];
      }

      return currentConfig[returnKey] || '';
    };

    const config = this.productConfig?.[productCategory]?.[productType]?.[sectionKey];

    if (!config) {
      return '';
    }

    if (rootFieldKey) {
      const keys = childFieldKey_1 ? [rootFieldKey, childFieldKey_1] : [rootFieldKey];
      return getConfigValue(config, keys);
    } else {
      return config?.[returnKey] || '';
    }
  }

  getProductCategoryInTitleCase(category: string, productType?: string): string {
    if (category === '' || category === null || category === undefined) {
      return '';
    }
    category = category.toLowerCase();
    while (category.includes('_')) {
      category = category.replace('_', '');
    }
    if (productType) {
      const productTypeSnackUC = this.getProductTypeAbbreviationSnakeUC(productType);
      if (!this.getGivenKeyValueForCreditFacilityConfig(productTypeSnackUC, 'commonConfig', 'isCategoryEnabled')) {
        return ''
      }
    }
    if (category.includes('logistics')) {
      return 'Logistics Finance';
    } else {
      return 'Trade Finance';
    }
  }

  getCategoryInTitleCaseForNum(category: number): string {
    return category === 0 ? 'Trade Finance' : 'Logistics Finance';
  }

  getFinanceTypeInCapital(financeType: string): string {
    financeType = financeType.toUpperCase();
    if (financeType.includes('DEFERRED')) return 'DEFERRED';
    else return 'IN_TRANSIT';
  }

  private isDisbursementAndCollectionValid(categorySnakeUC: string, productTypeSnakeUc: string, disbursement: string, collection: string): boolean {
    if (!categorySnakeUC) {
      categorySnakeUC = 'TRADE_FINANCE';
    }
    if (!productTypeSnakeUc) {
      return false;
    }

    const disbursementTo = this.getProdConfigValueForKey(categorySnakeUC, productTypeSnakeUc, 'DISBURSEMENT_TO', 'label');
    const collectedFrom = this.getProdConfigValueForKey(categorySnakeUC, productTypeSnakeUc, 'COLLECTION_FROM', 'label');

    return (disbursementTo === disbursement && collectedFrom === collection);
  }

  isDisbursementToCpAndCollectedFromApplicant(categorySnakeUC: string, productTypeSnakeUc: string): boolean {
    return this.isDisbursementAndCollectionValid(categorySnakeUC, productTypeSnakeUc, 'COUNTER_PARTY', 'APPLICANT');
  }

  isDisbursementToApplicantAndCollectedFromApplicant(categorySnakeUC: string, productTypeSnakeUc: string): boolean {
    return this.isDisbursementAndCollectionValid(categorySnakeUC, productTypeSnakeUc, 'APPLICANT', 'APPLICANT');
  }

  isDisbursementToApplicantAndCollectedFromCp(categorySnakeUC: string, productTypeSnakeUc: string): boolean {
    return this.isDisbursementAndCollectionValid(categorySnakeUC, productTypeSnakeUc, 'APPLICANT', 'COUNTER_PARTY');
  }

  getFinanceTypeInTitleCase(financeType: string): string {
    return this.firstLetterCaptial(this.getFinanceTypeInCapital(financeType), '_');
  }

  getProductTypeInTitleCase(productType: string): string {
    const item = this.getProductTypeAbbreviationSnakeUC(productType);
    return this.firstLetterCaptial(item, '_');
  }

  findFinancesIndex(productCategory: string, productType: string): number {
    const index = this.productOnboardingConfig.products.findIndex((instance, index) => {
      if (productCategory === 'SCF' && instance.apiKey === 'SUPPLY_CHAIN_FINANCING') {
        return index;
      } else {
        const productKey = productCategory + '_' + productType;
        if (instance.apiKey.includes(productKey)) {
          return index;
        }
      }
    });
    return index;
  }

  getProductFinanceDesc(item): string {
    if (item.includes('_FINANCE')) {
      const category = this.getProductCategoryInTitleCase(item);
      const productType = this.getProductTypeInTitleCase(item);
      let financeTypePresent = this.getAllFinanceTypeList().some(singleFinanceType => item.includes(singleFinanceType));
      if (financeTypePresent) {
        const financeType = this.getFinanceTypeInTitleCase(item);
        return category + ': ' + productType + ': ' + financeType;
      }
      return (category + ': ' + productType);
    }
    return this.getFinanceTypeInTitleCase(item);
  }

  getBuyerOrImporterAsLabel(category: string): string {
    return this.conditionMapConfig.productCategory[category].buyerImporterLabel;
  }

  getProductDisplayName(productCategory: string, productType: string): string {
    productCategory = this.getProductCategoryInTitleCase(productCategory, productType);
    let viewValue = this.getProductTypeInTitleCase(productType);
    if (productCategory) {
      viewValue = productCategory + ': ' + viewValue;
    }
    return viewValue;
  }
}