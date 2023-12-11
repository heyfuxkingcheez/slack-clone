import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { WorkspacesService } from './workspaces.service';
import { CreateWorkspaceDto } from './dto/create.workspace.dto';
import { Users } from 'src/entities/Users';
import { User } from 'src/common/decorators/user.decorator';

@Controller('api/workspaces')
@ApiTags('WORKSPACES')
export class WorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces(@User() user: Users) {
    return this.workspacesService.findMyWorkspaces(user.id);
  }

  @Post()
  createWorkspaces(@User() user: Users, @Body() body: CreateWorkspaceDto) {
    return this.workspacesService.createWorkspace(
      body.workspace,
      body.url,
      user.id,
    );
  }

  @Get(':url/members')
  getAllMembersFromWorkSpace() {}

  @Post(':url/members')
  inviteMembersToWorkSpace() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
