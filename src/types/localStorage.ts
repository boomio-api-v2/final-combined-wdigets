export interface ILocalStorageConfig {
  success: boolean;
  qrcode: string;
  animation: number;
  app_url: string;
  custom_text: string;
  puzzles_collected: number;
  appearing_puzzle_nr: number;
  x_position: number;
  y_position: number;
  img: string;
  w_button_text: string;
  w_hint_static_text: string;
  w_hint_text: string;
  w_top_text: string;
  p_top_text: string;
  p_coupon_text: string;
  p_code_text: string;
  p_bottom_text: string;
  p_button_text: string;
  p_bottom_text_end_pc: string;
  p_bottom_text_start_pc: string;
  p_bottom_text_start_m: string;
  p_bottom_text_end_m: string;
  p_coupon_text_line1: string;
  p_coupon_text_line2: string;
  p_button_text_line1: string;
  p_button_text_line2: string;
  boomioStopTill?: number | Date;
  instruction?: string;
  widget_type?: string;
  stop_for_sec?: number;
}
