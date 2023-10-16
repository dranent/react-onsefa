jQuery(document).ready(function(){
    //jQuery("").validationEngine({focusFirstField : false});
    //jQuery("#form-data").validationEngine({
    // 以下のパラメータは任意
    //promptPosition: "bottomLeft"//エラー文の表示位置
    //showArrowOnRadioAndCheckbox: true,//エラー箇所の図示
    //focusFirstField: false,//エラー時に一番文頭の入力フィールドにフォーカスさせるかどうか
    ///scroll: false
  });
});

// 候補日1と候補日2の日程が完全一致でエラー
function checkSameDateTime0201(field, rules, i, options) {
  if($("input[name='date02']").val() !== "") { // 値が入っている場合のみチェック
    if($("input[name='date02']").val() === $("input[name='date01']").val()) { // 日付が合っているかチェック
      if($("[name='AMPM02']:checked").val() !== undefined) { // そもそもチェックしていないかどうか確認
        if($("[name='AMPM02']:checked").val() === $("[name='AMPM']:checked").val()) { // 午前午後の選択が合っているかどうか確認
          return options.allrules.checkSameDateTime.alertText;
        }
      }
    }
  }
}
// 候補日3の日程チェック
function checkSameDateTime0301(field, rules, i, options) {
  // 候補日1と候補日3の日程が完全一致でエラー
  if($("input[name='date03']").val() !== "") { // 値が入っている場合のみチェック
    if($("input[name='date03']").val() === $("input[name='date01']").val()) { // 日付が合っているかチェック
      if($("[name='AMPM03']:checked").val() !== undefined) { // そもそもチェックしていないかどうか確認
        if($("[name='AMPM03']:checked").val() === $("[name='AMPM']:checked").val()) { // 午前午後の選択が合っているかどうか確認
          return options.allrules.checkSameDateTime.alertText;
        }
      }
    }
  }
  // 候補日2と候補日3の日程が完全一致でエラー
  if($("input[name='date03']").val() !== "") { // 値が入っている場合のみチェック
    if($("input[name='date03']").val() === $("input[name='date02']").val()) { // 日付が合っているかチェック
      if($("[name='AMPM03']:checked").val() !== undefined) { // そもそもチェックしていないかどうか確認
        if($("[name='AMPM03']:checked").val() === $("[name='AMPM02']:checked").val()) { // 午前午後の選択が合っているかどうか確認
          return options.allrules.checkSameDateTime.alertText;
        }
      }
    }
  }
}
//////////////////////////////////////////
//候補日1 追加　日時が必須であれば使わない
//////////////////////////////////////////
// 候補日1でAM/PM未選択エラー
function checkDateInput01(field, rules, i, options) {
  if($("input[name='date01']").val() !== "") { // 値が入っている場合のみチェック
    if($("[name='AMPM']:checked").val() === undefined) { // チェックしていないかどうか確認
      return options.allrules.checkDateInput.alertText;
    } else {
      $("input[name='date01']").validationEngine('hide');
    }
  }
}
// 候補日1でAM/PM選択されたらエラー解除
$(function(){
  $("[name='AMPM']").change(function() {
    if($("input[name='date01']").val() !== "") { // 値が入っている場合のみチェック
      if($("[name='AMPM']:checked").val() !== undefined) { // チェックしていないかどうか確認
        $("input[name='date01']").validationEngine('hide');
      }
    }
  });
});
//////////////////////////////////////////
//候補日2
//////////////////////////////////////////
// 候補日2でAM/PM未選択エラー
function checkDateInput02(field, rules, i, options) {
  if($("input[name='date02']").val() !== "") { // 値が入っている場合のみチェック
    if($("[name='AMPM02']:checked").val() === undefined) { // チェックしていないかどうか確認
      return options.allrules.checkDateInput.alertText;
    } else {
      $("input[name='date02']").validationEngine('hide');
    }
  }
}
// 候補日2でAM/PM選択されたらエラー解除
$(function(){
  checkSameDateTime0201();
  $("[name='AMPM02']").change(function() {
    if($("input[name='date02']").val() !== "") { // 値が入っている場合のみチェック
      if($("[name='AMPM02']:checked").val() !== undefined) { // チェックしていないかどうか確認
        $("input[name='date02']").validationEngine('hide');
      }
    }
  });
});
//////////////////////////////////////////
//候補日3
//////////////////////////////////////////
// 候補日3でAM/PM未選択エラー
function checkDateInput03(field, rules, i, options) {
  if($("input[name='date03']").val() !== "") { // 値が入っている場合のみチェック
    if($("[name='AMPM03']:checked").val() === undefined) { // チェックしていないかどうか確認
      return options.allrules.checkDateInput.alertText;
    } else {
      $("input[name='date03']").validationEngine('hide');
    }
  }
}
// 候補日3でAM/PM選択されたらエラー解除
$(function(){
  $("[name='AMPM03']").change(function() {
    if($("input[name='date03']").val() !== "") { // 値が入っている場合のみチェック
      if($("[name='AMPM03']:checked").val() !== undefined) { // チェックしていないかどうか確認
        $("input[name='date03']").validationEngine('hide');
      }
    }
  });
});
