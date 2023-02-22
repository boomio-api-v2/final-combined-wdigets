import { localStoragePropertyName } from '@/config';
import { ILocalStorageConfig } from '@/types';

class LocalStorageService {
  public config: ILocalStorageConfig;
  constructor() {
    this.clearStorage();
    this.config = this.getDefaultConfig();
  }

  clearStorage() {
    localStorage.removeItem(localStoragePropertyName);
  }

  сheckOnInstruction(content: Partial<ILocalStorageConfig>) {
    if (content?.instruction === 'stop') {
      const boomioStopTill = new Date(new Date().getTime() + 1000 * content.stop_for_sec);
      this.updateConfig({ boomioStopTill });
    }
  }

  removeByKey(key: keyof typeof this.config) {
    delete this.config[key];
    this.setInStorage();
  }

  setInStorage() {
    const objToString = JSON.stringify(this.config);
    localStorage.setItem(localStoragePropertyName, objToString);
  }

  updateConfig(property: Partial<ILocalStorageConfig>) {
    this.config = { ...this.config, ...property };
    this.setInStorage();
  }

  setConfigFromApi(content: Partial<ILocalStorageConfig>) {
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

  getDefaultConfig(): ILocalStorageConfig {
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
    const w_top_text =
      config?.w_top_text ?? appearing_puzzle_nr === 4
        ? 'CONGRATULATIONS!ENJOY YOUR A REWARD!'
        : 'COLLECT ALL PIECES AND WIN A GIFT!';
    /// ////////////////////////

    const p_bottom_text_start_pc =
      config?.p_bottom_text_start_pc ??
      'To have immediate access for all your great rewards open or download ';
    const p_bottom_text_end_pc = config?.p_bottom_text_end_pc ?? 'Boomio app by scanning this code';
    const p_bottom_text_start_m =
      config?.p_bottom_text_start_m ?? 'To have immediate access for all your great rewards ';
    const p_bottom_text_end_m = config?.p_bottom_text_end_m ?? 'open or download';

    const p_top_text = config?.p_top_text ?? 'YOU GOT 20% DISCOUNT!';
    const p_code_text = config?.p_code_text ?? 'Unique code: BM69233"';
    const p_coupon_text = config?.p_coupon_text ?? null;
    const p_bottom_text = config?.p_bottom_text ?? null;
    const p_button_text = config?.p_button_text ?? null;
    /// //////////////////

    const p_coupon_text_line1 = config?.p_coupon_text_line1 ?? '20%';
    const p_coupon_text_line2 = config?.p_coupon_text_line2 ?? 'DISCOUNT';

    const p_button_text_line1 = config?.p_coupon_text_line1 ?? 'Open';
    const p_button_text_line2 = config?.p_coupon_text_line1 ?? 'boomio app';

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
      p_bottom_text_end_pc,
      p_bottom_text_start_pc,
      p_bottom_text_start_m,
      p_bottom_text_end_m,
      p_coupon_text_line1,
      p_coupon_text_line2,
      p_button_text_line1,
      p_button_text_line2,
    };
  }
}

export default new LocalStorageService();
