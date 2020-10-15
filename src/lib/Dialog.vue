<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="yu-dialog-overlay" @click.self="onClickOverlay">
        <div class="yu-dialog-wrapper">
          <div class="yu-dialog">
            <header v-show="headerVisible">
              <slot name="title" />
              <span class="yu-dialog-title" v-if="!$slots.title">{{
                title
              }}</span>
              <span
                class="yu-dialog-close"
                @click="close"
                v-show="closable"
              ></span>
            </header>
            <main>
              <slot />
            </main>
            <footer v-show="footerVisible">
              <slot name="footer" />
              <div v-if="!$slots.footer">
                <Button @click="cancel">{{ cancelText }}</Button>
                <Button theme="primary" @click="ok">{{ okText }}</Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </template>
</template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    overlayClosable: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
    title: {
      type: String,
      default: '提示',
    },
    okText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    headerVisible: {
      type: Boolean,
      default: true,
    },
    footerVisible: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.overlayClosable) {
        close()
      }
    }
    const ok = () => {
      // 返回false可阻止关闭
      if (props.ok?.() !== false) {
        close()
      }
    }
    const cancel = () => {
      if (props.cancel?.() !== false) {
        close()
      }
    }
    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    }
  },
}
</script>

<style lang="scss">
$border-grey: #ddd;
$blue: #2d8cf0;

.yu-dialog-overlay {
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: fade_out(black, 0.5);

  .yu-dialog-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .yu-dialog {
      background: #fff;
      border-radius: 5px;
      width: 300px;
      box-shadow: 0 0 10px fade_out(black, 0.5);

      & > header {
        padding: 14px 16px;
        border-bottom: 1px solid $border-grey;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .yu-dialog-title {
          font-size: 20px;
        }

        .yu-dialog-close {
          display: inline-block;
          width: 16px;
          height: 16px;
          cursor: pointer;
          position: relative;

          &::before,
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background: #111;
            top: 50%;
            left: 50%;
          }

          &:hover::before,
          &:hover::after {
            background: $blue;
          }

          &::before {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          &::after {
            transform: translate(-50%, -50%) rotate(45deg);
          }
        }
      }

      & > main {
        padding: 14px 16px;
      }

      & > footer {
        padding: 14px 16px;
        border-top: 1px solid $border-grey;
        text-align: right;

        .yu-btn {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
