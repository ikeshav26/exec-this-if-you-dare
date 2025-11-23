#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const link = (text, url) => `\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`;
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function showLoading() {
  console.clear();
  const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  
  process.stdout.write(chalk.cyan('\n  Loading '));
  for (let i = 0; i < 12; i++) {
    process.stdout.write(chalk.cyan(frames[i % frames.length]));
    await sleep(80);
    process.stdout.write('\b');
  }
  console.log(chalk.green('✓\n'));
  await sleep(200);
}

async function main() {
  await showLoading();
  
  console.log(
    boxen(
      chalk.white(`
keshav@archlinux:~$ ${chalk.cyan('gitfetch')}

                   .~vVeZNgQBBBQQg9Ze1v~.
              \`^}%B@@@@@@@@@@@@@@@@@@@@@@8%}= \`
           -Lq#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#qr-                 ${chalk.bold.cyan('keshav@archlinux')}
        .V0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0?.              ${chalk.gray('─────────────────────────────────')}
      _l#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#l\`            ${chalk.yellow('OS:')}       ${chalk.white('Arch Linux x86_64')} ${chalk.cyan('🐧')}
    \`o@@@@@@@@v^r}P0@@@@@@@@@@@@@@@@@@@@ghlr<r@@@@@@@#o\`          ${chalk.yellow('Uptime:')}   ${chalk.magenta('/My_codes/Projects')} ${chalk.red('🚗💨')}
   ;0@@@@@@@@0      .?szL?*;!!!!~*|]Vox_      P@@@@@@@@0.         ${chalk.yellow('Packages:')} ${chalk.white('742 (pacman), 69 (pnpm)')}
  ?@@@@@@@@@@q                                z@@@@@@@@@#?        ${chalk.yellow('Shell:')}    ${chalk.white('/bin/fish')} ${chalk.cyan('🐟')}
 :@@@@@@@@@@@Q                                R@@@@@@@@@@@"       ${chalk.yellow('Editors:')}  ${chalk.white('nvim, vscode')} ${chalk.green('⚡')}
_g@@@@@@@@@@2-                                \`M@@@@@@@@@@0       ${chalk.yellow('Theme:')}    ${chalk.white('Catppuccin')} ${chalk.magenta('✨')}
a@@@@@@@@@@2                                    v@@@@@@@@@@;
#@@@@@@@@@@_                                     @@@@@@@@@@y      ${chalk.bold.green('⚙️  tech stack')}
@@@@@@@@@@@.                                     @@@@@@@@@@%      ${chalk.gray('─────────────────────────────────')}
#@@@@@@@@@@r                                    :@@@@@@@@@@s      ${chalk.cyan('▓▓▓▓▓▓▓▓▓▓')} ${chalk.white('JavaScript/Java/Python/C-lang')}
W@@@@@@@@@@Q\`                                  _0@@@@@@@@@@*      ${chalk.blue('▓▓▓▓▓▓▓▓▓░')} ${chalk.white('React/Next.js')} ${chalk.cyan('⚛️')}
~#@@@@@@@@@@9!                                ,Q@@@@@@@@@@#       ${chalk.green('▓▓▓▓▓▓▓▓░░')} ${chalk.white('Node.js/Express')} ${chalk.green('🟢')}
 ;@@@@@@@@@@@@6^.                          \`\\p@@@@@@@@@@@@~       ${chalk.red('▓▓▓▓▓▓▓░░░')} ${chalk.white('MongoDB/MySQL')} ${chalk.green('🍃')}
  n@@@@@PlVd@@@@#6Vv~_\`              \`_!?zd#@@@@@@@@@@@@#n        ${chalk.magenta('▓▓▓▓▓▓░░░░')} ${chalk.white('Docker/Git/Git-Actions/AWS(ec2)')} ${chalk.blue('🐳')}
   2#@@@#hr _Y#@@@@@@@#q\`          \`X#@@@@@@@@@@@@@@@@@#~
    .d@@@@@D\` .n6#@@@#V\`             Q@@@@@@@@@@@@@@@@d.         ${chalk.bold.magenta('🔗 contact & links')}
      x0@@@@0^   \`__\`-                M@@@@@@@@@@@@@@0=          ${chalk.gray('─────────────────────────────────')}
        =p#@@@#%Il]]L1,              M@@@@@@@@@@@#V=             ${chalk.blue('  GitHub:')}    ${chalk.cyan(link('github.com/ikeshav26', 'https://github.com/ikeshav26'))}
          \`vR#@@@@@@@@?              M@@@@@@@@#Pv\`              ${chalk.green('  Portfolio:')} ${chalk.cyan(link('portfolio.ikeshav.tech', 'https://portfolio.ikeshav.tech'))}
              "Lf8@@@@v              q@@@#Qa?:                  ${chalk.red('  LinkedIn:')}  ${chalk.cyan(link('in/ikeshav-gilhotra', 'https://www.linkedin.com/in/ikeshav-gilhotra/'))}
                  -!v|\`              _?v!\`
                                                                  ${chalk.dim.italic('💡 "I use arch btw !!" ✨')}
    `),
      {
        padding: 1,
        margin: 1,
        borderStyle: "double",
        borderColor: "cyan",
        backgroundColor: "#000000",
      }
    )
  );
  
  console.log(
    chalk.bold.cyan('\n  ⭐ Star this repo: ') +
    chalk.cyan(link('github.com/ikeshav26/who-keshav', 'https://github.com/ikeshav26/who-keshav')) +
    chalk.yellow(' 🚀\n')
  );
}

main().catch(console.error);
