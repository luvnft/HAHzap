import { unixNowMs } from "@snort/shared";

export let TimeSync = 0;

export async function syncClock() {
  try {
    const req = await fetch("https://api.z.arvrtise.com/api/time", {
      signal: AbortSignal.timeout(1000),
    });
    const nowAtServer = (await req.json()).time as number;
    const now = unixNowMs();
    TimeSync = now - nowAtServer;
    console.debug("Time clock sync", TimeSync);
  } catch {
    // ignore
  }
}
