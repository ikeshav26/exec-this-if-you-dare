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

${chalk.cyan('                   .~vVeZNgQBBBQQg9Ze1v~.')}
${chalk.cyan('              \`^}%B@@@@@@@@@@@@@@@@@@@@@@8%}= \`')}
${chalk.cyan('           -Lq#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#qr-')}                 ${chalk.bold.cyan('keshav@archlinux')}
${chalk.cyan('        .V0@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@0?.')}              ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('      _l#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#l\`')}            ${chalk.yellow('OS:')}       ${chalk.white('Arch Linux x86_64')} ${chalk.cyan('🐧')}
${chalk.cyan('    \`o@@@@@@@@v^r}P0@@@@@@@@@@@@@@@@@@@@ghlr<r@@@@@@@#o\`')}          ${chalk.yellow('Uptime:')}   ${chalk.magenta('18 years')} ${chalk.red('🚗💨')}
${chalk.cyan('   ;0@@@@@@@@0      .?szL?*;!!!!~*|]Vox_      P@@@@@@@@0.')}         ${chalk.yellow('Packages:')} ${chalk.white('742 (pacman), 69 (pnpm)')}
${chalk.cyan('  ?@@@@@@@@@@q                                z@@@@@@@@@#?')}        ${chalk.yellow('Shell:')}    ${chalk.white('/bin/fish')} ${chalk.cyan('🐟')}
${chalk.cyan(' :@@@@@@@@@@@Q                                R@@@@@@@@@@@"')}       ${chalk.yellow('Editors:')}  ${chalk.white('nvim, vscode')} ${chalk.green('⚡')}
${chalk.cyan('_g@@@@@@@@@@2-                                \`M@@@@@@@@@@0')}       ${chalk.yellow('Theme:')}    ${chalk.white('Catppuccin')} ${chalk.magenta('✨')}
${chalk.cyan('a@@@@@@@@@@2                                    v@@@@@@@@@@;')}
${chalk.cyan('#@@@@@@@@@@_                                     @@@@@@@@@@y')}      ${chalk.bold.green('⚙️  tech stack')}
${chalk.cyan('@@@@@@@@@@@.                                     @@@@@@@@@@%')}      ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('#@@@@@@@@@@r                                    :@@@@@@@@@@s')}      ${chalk.cyan('▓▓▓▓▓▓▓▓▓▓')} ${chalk.white('JavaScript/Java/Python/C-lang')}
${chalk.cyan('W@@@@@@@@@@Q\`                                  _0@@@@@@@@@@*')}      ${chalk.blue('▓▓▓▓▓▓▓▓▓░')} ${chalk.white('React/Next.js')} ${chalk.cyan('⚛️')}
${chalk.cyan('~#@@@@@@@@@@9!                                ,Q@@@@@@@@@@#')}       ${chalk.green('▓▓▓▓▓▓▓▓░░')} ${chalk.white('Node.js/Express')} ${chalk.green('🟢')}
${chalk.cyan(' ;@@@@@@@@@@@@6^.                          \`\\p@@@@@@@@@@@@~')}       ${chalk.red('▓▓▓▓▓▓▓░░░')} ${chalk.white('MongoDB/MySQL/Redis')} ${chalk.green('🍃')}
${chalk.cyan('  n@@@@@PlVd@@@@#6Vv~_\`              \`_!?zd#@@@@@@@@@@@@#n')}        ${chalk.magenta('▓▓▓▓▓▓░░░░')} ${chalk.white('Docker/Git/Git-Actions/AWS(ec2)')} ${chalk.blue('🐳')}
${chalk.cyan('   2#@@@#hr _Y#@@@@@@@#q\`          \`X#@@@@@@@@@@@@@@@@@#~')}
${chalk.cyan('    .d@@@@@D\` .n6#@@@#V\`             Q@@@@@@@@@@@@@@@@d.')}         ${chalk.bold.magenta('🔗 contact & links')}
${chalk.cyan('      x0@@@@0^   \`__\`-                M@@@@@@@@@@@@@@0=')}          ${chalk.gray('─────────────────────────────────')}
${chalk.cyan('        =p#@@@#%Il]]L1,              M@@@@@@@@@@@#V=')}            ${chalk.blue('  GitHub:')}${chalk.cyan(link('github.com/ikeshav26', 'https://github.com/ikeshav26'))}
${chalk.cyan('          \`vR#@@@@@@@@?              M@@@@@@@@#Pv\`')}              ${chalk.green('  Portfolio:')} ${chalk.cyan(link('ikeshav.in', 'https://ikeshav.in'))}
${chalk.cyan('              "Lf8@@@@v              q@@@#Qa?:')}                  ${chalk.red('  LinkedIn:')}  ${chalk.cyan(link('in/ikeshav-gilhotra', 'https://www.linkedin.com/in/ikeshav-gilhotra/'))}
${chalk.cyan('                  -!v|\`              _?v!\`')}
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
