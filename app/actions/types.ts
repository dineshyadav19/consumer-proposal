type LOAN_OPTION_DATA = {
  lender_name: string;
  project_value: string;
  rate: number;
  tenure: number;
  type: string;
  emi: string;
  down_payment_amount: string;
  term_loan: string;
  url: string;
  down_payment_rate: number;
  online_flag: boolean;
  order_value: string;
  subsidy_value: string;
  interest_total: string;
  fc_flag: boolean;
  fc_charge: number;
  proc_fee: number;
  security_deposit: number;
  interest_type: string;
  name: string;
  offer_id: string;
};

type LOAN_OPTIONS = {
  type: string;
  tenure: number;
  data: Array<LOAN_OPTION_DATA>;
};

type PROPOSAL_OUTPUT = {
  system_type: string;
  inverter_size: string;
  type_of_module: string;
  watt_peak: number;
  addon_price_breakup: {
    'System Add-On': string;
    'Safety Add-On': string;
  };
  no_of_modules: string;
  data: {
    spp: string;
    add_on_spp: string;
    system_price: string;
    add_on_price: string;
    gst: string;
    total_system_price_with_gst: string;
    name_change_charges: string;
    load_enhancement_charges: string;
    net_metering_charges: string;
    discom_work_price: string;
    onm_addon_price: string;
    total_service_addon_without_gst: string;
    gst_on_service: string;
    total_service_add_on_with_gst: string;
    total_system_and_service_including_gst: string;
    subsidy_value: string;
    effective_price: string;
    gp_commission: string;
    loan_options: Array<LOAN_OPTIONS>;
  };
};

export type PROPOSAL_API_RESPONSE = {
  status: number;
  message: string;
  data: {
    deal_data: {
      deal_id: string;
      deal_nickname: string;
      amount: string | null;
      pincode: string;
      city: string;
      address: string;
      lat_long: string;
      deal_stage_name: string;
      deal_type: string;
      status: string;
      gp_name: string;
      gp_mobile: string;
      gp_email: string;
      gp_company_name: string;
    };
    contact_data: {
      customer_name: string;
      customer_mobile: string;
      customer_email: string;
      customer_whatsapp: string;
    };
    design_data: {
      dc_capacity: string;
      solarlabs_link: string;
      solarlabs_screenshot: string | null;
      roof_top_area: string;
      preferred_mms: string;
      market_type: string;
      sanction_load: string;
      property_type: string | null;
      type_of_roof: string;
      electricity_phase: string;
      avg_monthly_bill: string;
      product_line: string;
      estimated_monthly_generation: number;
      estimated_yearly_generation: number;
      no_of_trees_planted: {
        monthly: number;
        yearly: number;
      };
      coal_burn_avoided: {
        monthly: number;
        yearly: number;
      };
      avg_monthly_savings: number;
      yearly_savings: number;
    };
    proposal_data: {
      proposal_input: {
        discom: string;
        name_change_required: boolean;
        add_ons: string;
        discount_percentage: number;
        discom_scope: string;
        no_of_floors: number;
        non_std_add_on: string;
        non_std_add_on_spp: number;
        ceig_cea_approval_required: boolean;
        amc_package: string | null;
        amc_tenure: number;
      };
      proposal_output: Array<PROPOSAL_OUTPUT>;
      discom_work: string;
      earthing_cable: string;
      proposal_document_url: string;
    };
  };
};
