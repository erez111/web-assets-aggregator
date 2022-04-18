#!/usr/bin/env node

// eslint-disable-next-line import/no-import-module-exports
import yargs from 'yargs';
// eslint-disable-next-line import/no-import-module-exports
import { license as packageLicense } from '../package.json';

const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const outputList: string[] = ['js', 'css'];
const outputListDetailed: string[] = ['js (For TypeScript/JavaScript files)', 'css (for .scss, .css files)'];

const outputArgument: yargs.Options = {
  alias: 'o',
  describe: `Output file type: ${outputListDetailed.join(', ')}`,
  required: true,
  type: 'string',
};

const sourcesArguments: yargs.Options = {
  // alias: 's',
  describe: 'Sources files to generate: (e.g: "a.ts b.js c.ts" or "a.scss b.css c.scss")',
  required: true,
  type: 'array',
};

const targetArgument: yargs.Options = {
  // alias: 't',
  describe: 'Target file (e.g: aggregated.js / aggregated.css)',
  required: true,
  type: 'string',
};

// @ts-ignore
if (!module.parent) {
  initializeCommands();
}

function initializeCommands(): void {
  // const cliRunnableFileName: string = 'cli.js';
  const cliCommandName: string = 'web-assets-aggregator';

  // eslint-disable-next-line no-unused-expressions
  yargs
    .usage(`Usage: ${cliCommandName} <command> [options]`)
    // .usage('Usage: $0 <command> [options]')
    .demandOption(['output'])
    .command('generate', 'Aggregates and Obfuscate Web Assets (.ts, .js, .scss, .css)', {
      output: outputArgument,
      target: targetArgument,
      sources: sourcesArguments,
    }, generateCommand as any)
    .option('output', outputArgument)
    .option('target', targetArgument)
    .option('sources', sourcesArguments)
    .example(
      `${cliCommandName} generate --output js --target [target file] --sources [list of .js/.ts sources separated with space]`,
      'Aggregates and Obfuscate into .js file',
    )
    .example(
      `${cliCommandName} generate --output css --target [target file] --sources [list of .scss/.css sources separated with space]`,
      'Aggregates and Obfuscate into .css file',
    )
    .help('help')
    .alias('help', 'h')
    .epilog(`Package license ${packageLicense}`)
    .argv;
}

function getCurrentRunningPath(additionalPath: string): string {
  return path.join(path.dirname(fs.realpathSync(__filename)), additionalPath);
}

async function generateCommand(): Promise<void> {
  // @ts-ignore
  const { output, target, sources } = yargs.argv;

  if (!output) {
    console.warn('Missing --output argument value');
    return;
  }
  if (outputList.indexOf(output) === -1) {
    console.warn(`--output argument value must be ${outputList.join(' or ')}`);
    return;
  }
  if (!target) {
    console.warn('Missing --target argument value');
    return;
  }
  if (!sources || sources.length === 0) {
    console.warn('Missing --sources argument value/s');
    return;
  }

  try {
    switch (output) {
      case 'js':
        const scriptJsPath = getCurrentRunningPath('/shell/ts_js_aggregate_and_obfuscate.sh');
        console.info(await executeShellCommand(`sh ${scriptJsPath} ${target} ${sources.join(',')}`));
        // console.info(await executeShellCommand(`npm run generate_js ${target} ${sources.join(',')}`));
        break;
      case 'css':
        const scriptCssPath = getCurrentRunningPath('/shell/scss_css_aggregate_compile_and_minify.sh');
        console.info(await executeShellCommand(`sh ${scriptCssPath} ${target} ${sources.join(',')}`));
        // console.info(await executeShellCommand(`npm run generate_css ${target} ${sources.join(',')}`));
        break;
      default:
        console.warn(`--output argument value must be ${outputList.join(' or ')}`);
        break;
    }
  } catch (err) {
    throw err;
  }
}

async function executeShellCommand(commandString: string): Promise<string> {
  // console.log('commandString', commandString);

  return new Promise((resolve: any, reject: any) => {
    // @ts-ignore
    exec(commandString, (err: any, stdout: string, stderr: any) => {
      if (!err) {
        resolve(stdout.trim());
        return;
      }
      const errMessage: string = err;
      reject(errMessage);
    });
  });
}
