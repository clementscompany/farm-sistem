import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Api from './src/backend/api/api.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================

Api.listen(3303, ()=>{ console.log(`servidor rodando em: http://localhost:${3303}`); })

// ===========================
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 660,
    icon:"./src/img/icon.jpeg",
    acceptFirstMouse:true,
    autoHideMenuBar:true,
    // fullscreen:true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.disableHardwareAcceleration();
