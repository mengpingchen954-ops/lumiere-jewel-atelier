# GitHub Pages 发布验收

日期：2026-10-20。源码仓库 https://github.com/mengpingchen954-ops/lumiere-jewel-atelier ，试玩 https://mengpingchen954-ops.github.io/lumiere-jewel-atelier/ 。公开独立仓库，GitHub Actions 执行 npm ci、6 项状态测试、生产构建、Pages 发布；首次工作流成功：https://github.com/mengpingchen954-ops/lumiere-jewel-atelier/actions/runs/39382243136 。

生产页面、JS、CSS 均 HTTP 200，与本地构建逐字节一致。Vite 相对资源路径支持仓库子目录，无 Netlify 注入或依赖。上传列表仅源码、配置、测试脚本和必要说明，不含登录凭据、原作素材、游戏存档或测试产物。

使用全新的无 cookies 浏览器会话，在 Pages 公开地址通过 74 项实际鼠标/键盘交互检查：完整制作与修复、两份制作和一份修理委托、局部加工、撤销重做、材料购买、刻花工具解锁、资金与唯一结算、自由作品寄售、收藏重开、草稿与副本、存档恢复和备份、保存失败提示、实际 PNG 导出。浏览器运行与控制台错误为零。

额外截图验收：正面、俯视、背面均实际显示首饰；背面不会再被房间墙面遮挡。右键实际拖动旋转只改变镜头，作品结构保持一致；旋转后的实际渲染照片正常下载。旧 Netlify 镜头限制已经解除。

设备：Windows，Intel(R) Core(TM) Ultra 7 265KF，32 GB RAM，ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 (0x00002504) Direct3D11 vs_5_0 ps_5_0, D3D11)，Chrome 155 / WebGL2，1440×960。完整流程后 60 FPS，平均 16.67 ms。1366×768 和 390×844 无横向溢出；完整通关以桌面鼠标为验收基准。

原有 localStorage 按网站来源隔离：旧 Netlify 存档需在旧页面“帮助 → 下载存档备份”，然后在新 Pages 页面“帮助 → 从备份恢复”。没有自动跨站传输存档。
