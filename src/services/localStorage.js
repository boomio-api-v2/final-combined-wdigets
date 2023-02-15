import { localStoragePropertyName } from '@/config';

class LocalStorageService {
  constructor() {
    this.clearStorage();
    this.config = this.getDefaultConfig();
  }

  clearStorage() {
    localStorage.removeItem(localStoragePropertyName);
  }

  сheckOnInstruction(content) {
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

  setConfigFromApi(content) {
    const defaultValues = this.getDefaultConfig();
    this.config = {
      x_position: this.config?.x_position ?? null,
      y_position: this.config?.y_position ?? null,
      ...defaultValues,
      ...content,
    };
    localStorage.setItem(localStoragePropertyName, JSON.stringify(this.config));
    this.сheckOnInstruction(content);
  }

  getDefaultConfig() {
    const localStorageService = localStorage.getItem(localStoragePropertyName);
    const config = JSON.parse(localStorageService);

    const success = config?.success ?? false;
    const animation = config?.animation ?? 1;
    const qrcode = `${config?.qrcode}` ?? '';
    const app_url = config?.app_url ?? '';
    const custom_text = config?.custom_text ?? '';
    const puzzles_collected = config?.puzzles_collected ?? 0;
    const appearing_puzzle_nr = config?.appearing_puzzle_nr ?? null;
    const x_position = config?.x_position ?? null;
    const y_position = config?.y_position ?? null;
    const img = config?.img ?? null;

    /// ///// Widget text ////////
    const w_button_text = config?.w_button_text ?? 'Go!';
    const w_hint_static_text = config?.w_hint_static_text ?? 'Hint for another piece';
    const w_hint_text = config?.w_hint_text ?? 'Adidas Stan Smith J FX7519';
    const w_top_text = config?.w_top_text ?? 'COLLECT ALL PIECES<br> AND WIN A GIFT!';
    /// ////////////////////////

    /// ////Prize card/////
    const p_top_text = config?.p_top_text ?? 'YOU GOT 20% DISCOUNT!';
    const p_code_text = config?.p_code_text ?? 'Unique code: BM69233"';
    const p_coupon_text = config?.p_coupon_text ?? null;
    const p_bottom_text = config?.p_bottom_text ?? null;
    const p_button_text = config?.p_button_text ?? null;
    /// //////////////////
    return {
      success,
      qrcode,
      animation,
      app_url,
      custom_text,
      puzzles_collected,
      appearing_puzzle_nr,
      x_position,
      y_position,
      img,
      w_button_text,
      w_hint_static_text,
      w_hint_text,
      w_top_text,
      p_top_text,
      p_coupon_text,
      p_code_text,
      p_bottom_text,
      p_button_text,
    };
  }
}

export default new LocalStorageService();
