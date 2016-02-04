/*
 * @package AJAX_Chat
 * @author Sebastian Tschan
 * @author Asmo Soinio
 * @author Saku Laukkanen
 * @copyright (c) Sebastian Tschan
 * @license Modified MIT License
 * @link https://blueimp.net/ajax/
 */

// Ajax Chat language Object:
var ajaxChatLang = {

    login: '%s kirjautui sisään.',
    logout: '%s kirjautui ulos.',
    logoutTimeout: '%s kirjautui ulos (Aikakatkaisu).',
    logoutIP: '%s kirjautui ulos (virheellinen IP-osoite).',
    logoutKicked: '%s  kirjautui ulos (Potkut).',
    channelEnter: '%s liittyi kanavalle.',
    channelLeave: '%s poistui kanavalta.',
    privmsg: '(kuiskaa)',
    privmsgto: '(kuiskaa käyttäjälle %s)',
    invite: '%s kutsuu sinut liittymään kanavalle %s.',
    inviteto: 'Sinun kutsusi käyttäjälle %s, liittymisestä kanavalle %s, on lähetetty.',
    uninvite: '%s peruu kutsun kanavalle %s.',
    uninviteto: 'Kutsusi peruminen käyttäjälle %s kanavaa %s varten, on lähetetty.',
    queryOpen: 'Yksityinen kanava käyttäjälle %s on avattu.',
    queryClose: 'Yksityinen kanava käyttäjälle %s on suljettu.',
    ignoreAdded: 'Käyttäjä %s on lisätty huomiotta jätettäviin.',
    ignoreRemoved: 'Käyttäjä %s on poistettu huomiotta jätettävistä.',
    ignoreList: 'Huomiotta jätettävät käyttäjät:',
    ignoreListEmpty: 'Ei huomiotta jätettäviä käyttäjiä.',
    who: 'Paikallaolijat:',
    whoChannel: 'Paikallaolijat kanavalla %s:',
    whoEmpty: 'Ei käyttäjiä annetulla kanavalla.',
    list: 'Käytettävät kanavat:',
    bans: 'Potkitut käyttäjät:',
    bansEmpty: 'Ei potkittuja käyttäjiä.',
    unban: 'Käyttäjän %s potkut on poistettu.',
    whois: 'Käyttäjän %s IP osoite:',
    whereis: 'Käyttäjä %s on kanavalla %s.',
    roll: '%s heittää %s ja saa %s.',
    nick: '%s on nyt %s.',
    toggleUserMenu: 'Näytä/piilota valikko käyttäjälle %s',
    userMenuLogout: 'Poistu',
    userMenuWho: 'Listaa paikallaolijat',
    userMenuList: 'Listaa käytettävissä olevat kanavat',
    userMenuAction: 'Määrittele toiminta',
    userMenuRoll: 'Heitä noppaa',
    userMenuNick: 'Vaihda käyttäjätunnusta',
    userMenuEnterPrivateRoom: 'Mene yksityiseen kanavaasi',
    userMenuSendPrivateMessage: 'Lähetä yksityinen viesti',
    userMenuDescribe: 'Lähetä yksityinen toiminto',
    userMenuOpenPrivateChannel: 'Avaa yksityinen kanava',
    userMenuClosePrivateChannel: 'Sulje yksityinen kanava',
    userMenuInvite: 'Kutsu',
    userMenuUninvite: 'Peru kutsu',
    userMenuIgnore: 'Ohita/Hyväksy',
    userMenuIgnoreList: 'Listaa huomiota jätettävät käyttäjät',
    userMenuWhereis: 'Näytä kanavat',
    userMenuKick: 'Poista/Porttikielto',
    userMenuBans: 'Listaa käyttäjät, joilla porttikielto',
    userMenuWhois: 'Näytä IP-osoite',
    unbanUser: 'Poista käyttäjän %s porttikielto',
    joinChannel: 'Liity kanavalle %s',
    cite: '%s sanoi:',
    urlDialog: 'Lisää nettisivujen osoite (URL):',
    deleteMessage: 'Poista tämä viesti',
    deleteMessageConfirm: 'Poistetaanko viesti?',
    errorCookiesRequired: 'Evästeiden pitää olla sallituja käyttääksesi tätä keskustelua.',
    errorUserNameNotFound: 'Virhe: Käyttäjää %s ei löydetty.',
    errorMissingText: 'Virhe: Puuttuva viestin teksti.',
    errorMissingUserName: 'Virhe: Puuttuva käyttäjänimi.',
    errorInvalidUserName: 'Virhe: Virheellinen käyttäjätunnus.',
    errorUserNameInUse: 'Virhe: Käyttäjätunnus on jo käytössä.',
    errorMissingChannelName: 'Virhe: Puuttuva kanavan nimi.',
    errorInvalidChannelName: 'Virhe: Virheellinen kanavan nimi: %s',
    errorPrivateMessageNotAllowed: 'Virhe: Yksityisviestit eivät ole sallittuja.',
    errorInviteNotAllowed: 'Virhe: Sinulla ei ole oikeutta kutsua ketään kanavalle.',
    errorUninviteNotAllowed: 'Virhe: Sinulla ei ole oikeutta perua kutsua tälle kanavalle.',
    errorNoOpenQuery: 'Virhe: Ei yksityistä kanavaa auki.',
    errorKickNotAllowed: 'Virhe: Sinulla ei ole oikeutta potkia käyttäjää %s.',
    errorCommandNotAllowed: 'Virhe: Komento ei ole sallittu: %s',
    errorUnknownCommand: 'Virhe: Tuntematon komento: %s',
    errorMaxMessageRate: 'Virhe: Liikaa viestejä minuutissa.',
    errorConnectionTimeout: 'Virhe: Yhteyden aikakatkaisu, olkaa hyvä ja yrittäkää uudelleen.',
    errorConnectionStatus: 'Virhe: Yhteyden tila: %s',
    errorSoundIO: 'Virhe: Äänitiedoston lataus epäonnistui (Flash IO-virhe).',
    errorSocketIO: 'Virhe: Yhteys socket palvelimeen epäonnistui (Flash IO-virhe).',
    errorSocketSecurity: 'Virhe: Yhteys socket palvelimeen epäonnistui  (Flash-turvallisuus virhe).',
    errorDOMSyntax: 'Virhe: Virheellinen DOM-syntaksi (DOM-tunniste: %s).'

}