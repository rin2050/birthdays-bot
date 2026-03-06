const { EmbedBuilder } = require("discord.js");

const top = new EmbedBuilder({
    title: "Page(1/4)",
    fields: [
        {
            name: "基本コマンド",
            value: "------------------------------ \n このbotの基本的なコマンドを表示します \n コマンドは、設定したprefix + コマンド名 で動作します \n ------------------------------",
        },
        {
            name: "`omikuji`",
            value: "おみくじをします",
        },
        {
            name: "`random [選択肢1] [選択肢2] ● ● ●`",
            value: "抽選を行います(実装予定)",
        },
        {
            name: "`random-num [試行回数] [選択肢1] [選択肢2] ● ● ●`",
            value: "任意の回数抽選を行います(実装予定)",
        },
        {
            name: "`server`",
            value: "サーバーの招待リンクを表示します",
        },
        {
            name: "`help-(pageID)`",
            value: "指定したページID(例: 2)のhelpを表示します",
        },
        {
            name: "次のページを表示する",
            value: "`help-2`",
        },
    ],
});
const page2 = new EmbedBuilder({
    title: "Page(2/4)",
    fields: [
        {
            name: "詳細コマンド",
            value: "------------------------------ \n このbotのシステムに関するコマンドを表示します \n ------------------------------",
        },
        {
            name: "`ping`",
            value: "ping値を表示します",
        },
        {
            name: "`status`",
            value: "botのステータスを表示します",
        },
        {
            name: "`version`",
            value: "botのバージョンを表示します",
        },
        {
            name: "`license`",
            value: "このbotのライセンスを表示します",
        },
        {
            name: "`user [メンションもしくはID]`",
            value: "ユーザー情報を表示します",
        },
        {
            name: "次のページを表示する",
            value: "`help-3`",
        },
    ],
});
const page3 = new EmbedBuilder({
    title: "Page(3/4)",
    fields: [
        {
            name: "設定コマンド",
            value: "------------------------------ \n このbotの設定機能に関するコマンドを表示します \n ------------------------------",
        },
        {
            name: "`rasen`",
            value: "深境螺旋の更新通知を表示します",
        },
        {
            name: "`theater`",
            value: "幻想シアターの更新通知を表示します",
        },
        {
            name: "`profile-update`",
            value: "profileを最新のものに更新します",
        },
        {
            name: "`set-prefix 【設定したいprefix】`",
            value: "接頭辞を設定します(設定は設定を行ったユーザーのみに)",
        },
        {
            name: "`birthday set 【誕生日(mm/dd)】`",
            value: "自分の誕生日を設定します(例: birthday 01/03)",
        },
        {
            name: "`birthday enable`",
            value: "自分の誕生日を有効化します(誕生日になったら特定のチャンネルに通知される)",
        },
        {
            name: "`birthday disable`",
            value: "自分の誕生日を有効化します(誕生日になっても特定のチャンネルに通知されない)",
        },
        {
            name: "次のページを表示する",
            value: "`help-4`",
        },
    ],
});
const page4 = new EmbedBuilder({
    title: "Page(4/4)",
    fields: [
        {
            name: "管理者コマンド",
            value: "------------------------------ \n このコマンドは管理者のみ実行可能です \n ------------------------------",
        },
        {
            name: "`eval 【評価するjsコード】`",
            value: "コードを評価します",
        },
        {
            name: "`shell 【実行するshellコマンド】`",
            value: "shellコマンドを実行します",
        },
        {
            name: "`reload 【コマンド名】`",
            value: "コマンドをリロードします",
        },
        {
            name: "`check 【調べるユーザーのID】`",
            value: "DBに保存されているデータを表示します",
        },
        {
            name: "`shutdown`",
            value: "botをシャットダウンします",
        },
        {
            name: "`prefix-reset 【リセットするユーザーのID】`",
            value: "prefixのリセットを行いconfigで設定されているものに強制的に置き換えます",
        },
        {
            name: "`block 【ブロックするユーザーのID】`",
            value: "ブロックを行い、指定したユーザーのコマンド実行を禁止します",
        },
        {
            name: "`unblock 【ブロックを解除するユーザーのID】`",
            value: "ユーザーのブロックを解除します",
        },
        {
            name: "`hardblock 【ハードブロックするユーザーのID】`",
            value: "前提: ユーザーのブロック \n ハードブロックを行った場合ブロックされていることを通知するメッセージを表示しません",
        },
        {
            name: "`unhardblock 【ハードブロックを解除するユーザーのID】`",
            value: "ユーザーのハードブロックを解除します",
        },
        {
            name: "`deploy`",
            value: "`git pull origin main`を実行します",
        },
        {
            name: "`birthday admin 【ユーザーのID】 【サブコマンド...】`",
            value: "`他人の誕生日コマンドを実行します`"
        }
    ],
});
exports.top = top;
exports.page2 = page2;
exports.page3 = page3;
exports.page4 = page4;
