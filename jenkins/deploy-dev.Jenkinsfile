pipeline {
  agent any

  stages {
    stage('Deploy DEV') {
      environment {
        DOCKER_REGISTRY = credentials('docker-registry-central-sv')
        VAULT = credentials('vault-central-sv-reader')
        ENV = 'dev'
        CLOUDFRONT_DISTRIBUTION_ID = 'EDOCIKREJB3PO'
      }
      steps {
        copyArtifacts projectName: 'umgc_ui_library-build-dev'
        sh """
        ./jenkins/s3deploy
        """
        archiveArtifacts artifacts: 'docker-image.txt'
      }
    }
  }
}
