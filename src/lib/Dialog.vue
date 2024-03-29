<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="yu-dialog-overlay" @click.self="onClickOverlay">
        <div class="yu-dialog-wrapper">
          <div class="yu-dialog">
            <header v-show="headerVisible">
              <slot name="title" />
              <span class="yu-dialog-title" v-if="!$slots.title">{{
                titleText
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

<script lang="ts">
import { Button } from './index'
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
    titleText: {
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
      if (props.ok && props.ok() === false) return
      close()
    }
    const cancel = () => {
      if (props.cancel && props.cancel() === false) return
      close()
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
  display: flex;
  justify-content: center;
  align-items: center;

  .yu-dialog-wrapper {
    min-width: 250px;
    max-width: 96%;
    .yu-dialog {
      background: #fff;
      border-radius: 5px;
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
          color: #17233d;
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
        padding: 16px;
        color: #515a6e;
      }

      & > footer {
        padding: 16px 18px;
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
