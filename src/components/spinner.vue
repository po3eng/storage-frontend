<template>
  <div class="spinner" />
</template>

<style scoped>
  .spinner {
    --border-width: 3px;

    height: 16px;
    width: 16px;
    border-radius: 50%;
    --mask: radial-gradient(
      farthest-side,
      transparent calc(100% - var(--border-width) - 0.5px),
      #000 calc(100% - var(--border-width) + 0.5px)
    );
    -webkit-mask: var(--mask);
    mask: var(--mask);
    background: linear-gradient(to top, rgb(33, 115, 150, 1), rgba(33, 115, 150, 0.5)) 100% 0/50% 100% no-repeat,
      linear-gradient(rgba(33, 115, 150, 0.5) 50%, transparent 95%) 0 0/50% 100% no-repeat;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
