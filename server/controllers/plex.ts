import { JsonController, Get, Param } from 'routing-controllers';

@JsonController('/plex')
export class PlexController {
  @Get('/settings')
  public getPlexSettings() {
    return {
      directStreamBitrate: 20000
    };
  }

  @Get('/:id/status')
  public getPlexServerStatus(@Param('id') id: number)
  {

  }
}
