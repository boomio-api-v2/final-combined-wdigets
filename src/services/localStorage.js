import { localStoragePropertyName } from '@/config';

class LocalStorageService {
  constructor() {
    this.clearStorage();
    if (!this.config) {
      this.config = this.getDefaultConfig();
    }
  }

  clearStorage() {
    // localStorage.removeItem(localStoragePropertyName);
  }

  checkOnInstruction(content) {
    if (content?.instruction === 'stop') {
      const boomioStopTill = new Date(new Date().getTime() + 1000 * content.stop_for_sec);
      this.updateConfig({ boomioStopTill });
    }
  }

  removeByKey(key) {
    delete this.config[key];
    this.setInStorage();
  }

  setInStorage() {
    const objToString = JSON.stringify(this.config);
    localStorage.setItem(localStoragePropertyName, objToString);
  }

  updateConfig(property) {
    this.config = { ...this.config, ...property };
    this.setInStorage();
  }

  setConfigFromApi(content, ev_type) {
    if (ev_type === 'static_info') {
      this.static_exists = true;
      this.updateConfig({ static_text: this.static_exists });
    }
    const defaultValues = this.getDefaultConfig();
    this.config = {
      x_position: this.config?.x_position ?? null,
      y_position: this.config?.y_position ?? null,
      ...defaultValues,
      ...content,
    };
    localStorage.setItem(localStoragePropertyName, JSON.stringify(this.config));
    this.checkOnInstruction(content);
  }

  getDefaultConfig() {
    const localStorageService = localStorage.getItem(localStoragePropertyName);
    const config = JSON.parse(localStorageService);
    const success = config?.success ?? false;
    const animation = config?.animation ?? 1;
    const qrcode = `${config?.qrcode}` ?? '';
    const app_url = config?.app_url ?? '';
    const custom_text = config?.custom_text ?? '';
    const x_position = config?.x_position ?? null;
    const y_position = config?.y_position ?? null;
    const img = config?.img ?? null;
    /// ///// Widget text ////////
    const w_button_text = config?.w_button_text ?? 'Go!';
    const w_hint_static_text = config?.w_hint_static_text ?? 'Hint for another piece';
    /// ////////////////////////
    const p_bottom_text_start_pc =
      config?.p_bottom_text_start_pc ??
      'To have immediate access for all your great rewards open or download ';
    const p_bottom_text_end_pc = config?.p_bottom_text_end_pc ?? 'Boomio app by scanning this code';
    const discountType = 'percentage';
    const game_type = config?.game_type ?? '';
    const best_discount = config?.best_discount ?? 0;

    const p_bottom_text_start_m =
      config?.p_bottom_text_start_m ?? 'To have immediate access for all your great rewards ';
    const p_bottom_text_end_m = config?.p_bottom_text_end_m ?? 'open or download';
    const p_top_text = config?.p_top_text ?? 'YOU GOT ??? DISCOUNT!';
    const p_code_text = config?.p_code_text ?? 'Unique code: ???';
    const p_coupon_text = config?.p_coupon_text ?? null;
    const p_bottom_text = config?.p_bottom_text ?? null;
    const p_button_text = config?.p_button_text ?? null;
    /// //////////////////
    const p_coupon_text_line1 = config?.p_coupon_text_line1 ?? '???';
    const business_name =
      config?.business_name === 'Gamtos Ateitis Random'
        ? ['Gamtos Ateitis Glass', 'Gamtos Ateitis Plastic', 'Gamtos Ateitis Paper'][
            Math.floor(Math.random() * 3)
          ]
        : config?.business_name ?? '';
    const collection = config?.collection ?? [];
    const collectables = config?.collectables ?? [];
    const coupon_code = config?.coupon_code ?? '';
    const just_won = config?.just_won ?? '';
    const p_coupon_text_line2 = config?.p_coupon_text_line2 ?? 'DISCOUNT';
    const p_button_text_line1 = config?.p_button_text_line1 ?? 'Open';
    const p_button_text_line2 = config?.p_button_text_line2 ?? 'boomio app';
    const static_text = config?.static_text ?? false;
    const boomioStopTill = config?.boomioStopTill ?? null;
    const m = config?.m ?? null;
    const puzzle = {
      puzzles_collected: config?.puzzles_collected ?? 0,
      puzzles_needed: config?.puzzles_needed ?? undefined,
      hint: config?.hint ?? 'Keep looking!',
    };
    const w_top_text = config?.w_top_text
      ? config.w_top_text
      : puzzle.puzzles_collected === 4
      ? 'CONGRATULATIONS! ENJOY YOUR A REWARD!'
      : 'COLLECT ALL PIECES AND WIN A GIFT!';
    const secondary_text = config?.secondary_text ?? null;
    const top_text = config?.top_text ?? null;
    const hint_static_text = config?.hint_static_text ?? null;
    const button_text = config?.button_text ?? null;
    const under_picture_text = config?.under_picture_text ?? null;
    const user_email = config?.user_email ?? null;
    const widget_subtype = config?.subtype ?? false;
    const email_collection_required = config?.email_collection_required ?? false;
    const product = config?.product ?? '???';
    const currentPageUrl = window.location.href;
    const urlParams = new URL(currentPageUrl).searchParams;
    const campaignUrl = urlParams.get('campaign_url');
    const languageParam = urlParams.get('language');
    const couponCodeNew = config?.coupon_code;
    const language = config?.business_name === 'Pigu.lt' ? languageParam : config?.language ?? 'LT';
    const userBestScore = config?.user_best_score ? config?.user_best_score : 0;
    return {
      language,
      widget_subtype,
      success,
      qrcode,
      animation,
      app_url,
      custom_text,
      puzzle,
      x_position,
      y_position,
      img,
      w_button_text,
      w_hint_static_text,
      w_top_text,
      p_top_text,
      p_coupon_text,
      product,
      p_bottom_text,
      p_button_text,
      p_bottom_text_end_pc,
      discountType,
      p_bottom_text_start_pc,
      p_bottom_text_start_m,
      p_bottom_text_end_m,
      p_coupon_text_line1,
      p_coupon_text_line2,
      just_won,
      collection,
      coupon_code,
      collectables,
      best_discount,
      p_button_text_line1,
      p_button_text_line2,
      business_name,
      static_text,
      boomioStopTill,
      m,
      secondary_text,
      top_text,
      hint_static_text,
      button_text,
      under_picture_text,
      user_email,
      email_collection_required,
      p_code_text,
      product,
      game_type,
      campaignUrl,
      couponCodeNew,
      userBestScore,
    };
  }
}

export default new LocalStorageService();
