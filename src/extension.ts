import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  // register a configuration provider for 'mock' debug type
  const provider = new TsDebugConfigurationProvider();
  context.subscriptions.push(
    vscode.debug.registerDebugConfigurationProvider("tsx", provider),
    vscode.debug.registerDebugConfigurationProvider("ts-node", provider)
  );
}

export function deactivate() {
  // nothing to do
}

class TsDebugConfigurationProvider
  implements vscode.DebugConfigurationProvider
{
  provideDebugConfigurations(
    folder: vscode.WorkspaceFolder | undefined,
    token?: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.DebugConfiguration[]> {
    return Promise.resolve([]);
  }

  resolveDebugConfiguration(
    folder: vscode.WorkspaceFolder | undefined,
    config: vscode.DebugConfiguration,
    token?: vscode.CancellationToken
  ): vscode.ProviderResult<vscode.DebugConfiguration> {
    // if launch.json is missing or empty
    if (!config.type && !config.request && !config.name) {
      return null;
    }
    return config;
  }
}
