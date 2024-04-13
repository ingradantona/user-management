import { Controller, Get, Post, Body, Param, Query, Put, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUser } from './dto/filter-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from 'src/shared/user.decorator';
import TokenInfo from 'src/auth/interfaces/token-info';
import { PermissionGuard } from 'src/auth/shared/guards/permission.guard';
import { AccessProfile } from 'src/shared/Enums';
import { FilterChart } from './dto/filter-user-chart';
@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(PermissionGuard(AccessProfile.ADMIN))
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(PermissionGuard(AccessProfile.COMMON))
  findAll(@Query() filter: FilterUser) {
    return this.userService.findAll(filter);
  }

  @Get('chart')
  @UseGuards(PermissionGuard(AccessProfile.ADMIN))
  getChartData(@Query() filter: FilterChart) {
    return this.userService.chart(filter);
  }

  @Get('profiles')
  @UseGuards(PermissionGuard(AccessProfile.COMMON))
  findAllProfiles() {
    return this.userService.findAllProfiles();
  }

  @Get(':id')
  @UseGuards(PermissionGuard(AccessProfile.COMMON))
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(PermissionGuard(AccessProfile.COMMON))
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @User() userReq: TokenInfo,
  ) {
    return this.userService.update(+id, updateUserDto, userReq);
  }

  @Patch('status/:id')
  @UseGuards(PermissionGuard(AccessProfile.ADMIN))
  remove(@Param('id') id: string) {
    return this.userService.changeStatus(+id);
  }
}
