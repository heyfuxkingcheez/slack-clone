import { Controller, Post, Get, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('api/workspaces')
@ApiTags('WORKSPACES')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspaces() {}

  @Get(':url/members')
  getAllMembersFromWorkSpace() {}

  @Post(':url/members')
  inviteMembersToWorkSpace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
