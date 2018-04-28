#!/usr/bin/env node

//const argv = require('yargs').argv
const chalk = require('chalk')

function ok() {
    return true
}

const serve = (port) => {
    console.log(chalk.green(`Serve invoked with: ${chalk.red(port)}`))
}

const pkg = require('./package.json')

var command = require('yargs') //eslint-disable-line
    .version().alias('version', 'V')
    .command('serve [port]', 'start the server', (yargs) => {
        yargs
            .positional('port', {
                describe: 'port to bind on',
                default: 5000,
            })
    }, (argv) => {
        if (argv.verbose) console.info(`start server on :${chalk.red(argv.port)}`)
        serve(argv.port)
    })
    .option('verbose', {
        alias: 'v',
        default: false,
    })
    .help('help').alias('help','h')
    .exitProcess(false)     // warning, can do something instead, when --help is used
    //.demandCommand()
    .argv

    console.log('yargs: ', command)


module.exports = ok
// program
//     .version(pkg.version, '-v --version')
//     .description('Fake package manager')
//     .command('install [name]', 'install one or more packages').alias('i')
//     .command('search [query]', 'search with optional query').alias('s')
//     .command('list', 'list packages installed')
//     .command('publish', 'publish the package').alias('p')
//     .command('wut', 'wut subcommand')
//     .command('rm <dir>', 'desc')
//     .option('-r, --recursive', 'Remove recursively')
//     .action(function (dir, cmd) {
//         console.log('remove ' + dir + (cmd.recursive ? ' recursively' : ''))
//     })
//     .parse(process.argv)
// 
// module.exports = { program, ok }