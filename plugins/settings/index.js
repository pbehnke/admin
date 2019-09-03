exports.name = 'Settings';
exports.icon = 'cog';
exports.roles = ['users', 'settings'];
exports.color = '#83c83c';

var actions = exports.actions = {};
actions.usersquery          = 'GET      *Users          --> @query       {users}';
actions.usersread           = 'GET      *Users          --> @read        {users}';
actions.usersinsert         = 'POST     *Users          --> @insert      {users}';
actions.usersupdate         = 'POST     *Users          --> @update      {users}';
actions.usersremove         = 'DELETE   *Users          --> @remove      {users}';
actions.pluginsquery        = 'GET      *Plugins        --> @query       {users}';
actions.settingsread        = 'GET      *Settings       --> @read        {settings}';
actions.settingssave        = 'POST     *Settings       --> @save        {settings}';
actions.settingssmtp        = 'POST     *Settings/SMTP  --> @exec        {settings}';
actions.accountread         = 'GET      *Account        --> @read';
actions.accountsave         = 'POST     *Account        --> @save';
actions.accounnotifications = 'GET      *Account        --> @notifications';
actions.accountotpverify    = 'POST     *Account/TOTP   --> @verify';
actions.accountotp          = 'GET      *Account/TOTP   --> @generate';
