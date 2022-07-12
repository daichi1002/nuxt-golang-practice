import swal from "sweetalert2";

const confirmButtonColor = "#00a7db";
const deleteConfirmButtonColor = "#db2400";

const error = {
  icon: "error",
  confirmButtonColor,
  confirmButtonText: "入力に戻る",
} as const;

const warning = {
  icon: "warning",
  confirmButtonColor,
} as const;

const success = {
  icon: "success",
  confirmButtonColor,
} as const;

export const confirm = {
  title: "入力を確定してよろしいですか？",
  icon: "info",
  confirmButtonText: "入力を確定する",
  cancelButtonText: "キャンセル",
  confirmButtonColor,
  showCancelButton: true,
  allowEnterKey: false,
} as const;

export const deleteConfirm = {
  title: "削除してよろしいですか？",
  icon: "warning",
  confirmButtonText: "削除する",
  cancelButtonText: "キャンセル",
  confirmButtonColor,
  showCancelButton: true,
  allowEnterKey: false,
} as const;

export const error_invalid = (
  message: string = "正しい値を入力してください"
) => {
  return { ...{ title: message }, ...error };
};

export const loadingBase = (title: string) => {
  return { ...{ title }, ...loading };
};

export const error_requiredUniqueParams = {
  ...{ title: "固有パラメータの入力をしてください" },
  ...error,
} as const;

export const error_register = {
  ...{ title: "入力に失敗しました" },
  ...error,
} as const;

export const error_delete = {
  ...{ title: "削除に失敗しました" },
  ...error,
} as const;

export const errorFind = {
  ...{ title: "検索に失敗しました" },
  ...error,
} as const;

export const warning_calc = {
  ...{ title: "その組み合わせは</br>定価が存在しません" },
  ...warning,
} as const;

export const error_import = {
  ...{ title: "インポートに失敗しました" },
  ...error,
} as const;

export const done = {
  ...{ title: "入力を確定しました" },
  confirmButtonText: "OK",
  ...success,
} as const;

export const deleteDone = {
  ...{ title: "削除が完了しました" },
  confirmButtonText: "OK",
  ...success,
} as const;

export const searchDone = {
  ...{ title: "検索が完了しました" },
  ...success,
} as const;

export const done_import = {
  ...{ title: "インポートに成功しました" },
  ...success,
} as const;

export const error_result = {
  ...{
    title:
      "御見積書 </br>大項目の「建築工事」と</br>御見積書 </br>建築中項目の「建築中項目合計」</br>を一致させて下さい",
  },
  ...error,
} as const;

export const loading = {
  title: "保存中…",
  icon: "info",
  allowOutsideClick: false,
  didOpen: () => {
    swal.showLoading();
  },
} as const;

export const loadingInDownload = {
  title: "ダウンロード中...",
  icon: "info",
  allowOutsideClick: false,
  didOpen: () => {
    swal.showLoading();
  },
} as const;

export const searchLoading = {
  title: "検索中…",
  icon: "info",
  allowOutsideClick: false,
  didOpen: () => {
    swal.showLoading();
  },
} as const;

export const confirm_initInput = {
  title: "この入力値は後から変更できません\n入力を確定してよろしいですか？",
  icon: "warning",
  confirmButtonText: "入力を確定する",
  cancelButtonText: "キャンセル",
  confirmButtonColor,
  showCancelButton: true,
  allowEnterKey: false,
  width: "60rem",
} as const;
