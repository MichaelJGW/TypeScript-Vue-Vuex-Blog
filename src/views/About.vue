<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      title = {{title}}
    </div>
    <div>
      fullName = {{aboutState.fullName}}
    </div>
    <div>
      <!-- getterNum = {{getterNum}} -->
    </div>
    <button @click="changeName()">Change State</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import { getModule } from 'vuex-module-decorators';
import about from '../store/about';

@Component
export default class HelloWorld extends Vue {
  private num = 0 as number;
  private title = 'Hello There' as string;
  private aboutState = getModule(about) as about;

  @Prop() private msg!: string;

  private changeName(): void {
    this.aboutState.setNames({name: 'hello there'});
  }

}
</script>
