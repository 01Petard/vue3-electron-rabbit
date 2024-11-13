import {app, BrowserWindow} from 'electron';
import path from 'path';
import {fileURLToPath} from 'url';

// 获取当前文件的目录路径
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let win;  // 使用 let 声明 win 变量

function createWindow() {
  win = new BrowserWindow({
    width: 1600,
    height: 1080,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      webSecurity: false, // 关闭Web安全检查
    },
  });

  // 检查是否处于开发模式
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    // 开发模式下加载 Vite 开发服务器
    win.loadURL('http://localhost:3000');
  } else {
    // 生产模式下加载打包后的文件
    const indexPath = path.join(__dirname, '../dist/index.html');
    console.log('Loading URL:', `file://${indexPath}`);
    win.loadURL(`file://${indexPath}`);
  }

  // 监听窗口关闭事件
  win.on('closed', () => {
    win = null;  // 清除引用
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
