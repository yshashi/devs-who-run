import axios from 'axios';

interface DiscordStats {
  total_members: number;
  online_members: number;
}

export class DiscordService {
  private static readonly DISCORD_SERVER_ID = 'M85nWydE';
  private static readonly DISCORD_API_URL = `https://discord.com/api/v10/guilds/${DiscordService.DISCORD_SERVER_ID}/preview`;

  /** currently using a temporary solution to fetch server stats with invites
   will update it .net api once the deployment is done */
  private static readonly INVITE_URL_FOR_STATS = 'https://discord.com/api/v9/invites/mwRhMpR6fJ?with_counts=true';

  static async getServerStats(): Promise<DiscordStats> {
    try {
      const response = await axios.get(DiscordService.INVITE_URL_FOR_STATS);
      return {
        total_members: response.data.approximate_member_count || 0,
        online_members: response.data.approximate_presence_count || 0,
      };
    } catch (error) {
      console.error('Error fetching Discord stats:', error);
      return {
        total_members: 0,
        online_members: 0,
      };
    }
  }
}
