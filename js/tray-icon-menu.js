var application = require('app'),
    BrowserWindow = require('browser-window'),
    Menu = require('menu'),
    Tray = require('tray'),
    Path = require('path'),
    MenuItem = require('menu-item');

module.exports = {
    renderTrayIconMenu : function(){
        var trayIconPath = Path.join( __dirname , '../image/favicon.png'),
            trayIconObject = new Tray(trayIconPath),
            trayContextMenu = new Menu();
        trayContextMenu.append(new MenuItem({
            label: 'Full Screen',
            click: function() {
                var targetWindow = BrowserWindow.getAllWindows()[0];
                targetWindow.setFullScreen(true)
            }
        }));
        trayContextMenu.append(new MenuItem({ type: 'separator' }));
        trayContextMenu.append(new MenuItem({
            label: 'Toggle Developer Tool',
            click: function() {
                var targetWindow = BrowserWindow.getAllWindows()[0];
                targetWindow.toggleDevTools();
            }
        }));
        trayContextMenu.append(new MenuItem({
            label: 'Reload',
            click: function() {
                var targetWindow = BrowserWindow.getAllWindows()[0];
                targetWindow.reload();
            }
        }));
        trayContextMenu.append(new MenuItem({
            label: 'Quit',
            click: function() {
                application.quit();
            }
        }));
        trayIconObject.setToolTip('ElectronTray Icon Menu Demo');
        trayIconObject.setContextMenu(trayContextMenu);
    }
}
